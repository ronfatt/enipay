/**
 * ENIPAY Admin Portal Controller (隐藏管理后台逻辑)
 * Supports Supabase Storage Upload, Realtime Database CRUD, Authentication, and Local Fallback
 */

// Storage Configuration Keys
const STORAGE_KEY_PASS = "enipay_admin_pass";
const STORAGE_KEY_URL = "enipay_supabase_url";
const STORAGE_KEY_KEY = "enipay_supabase_key";
const STORAGE_KEY_BUCKET = "enipay_supabase_bucket";
const STORAGE_KEY_LOCAL_DB = "enipay_local_resources_db";

let supabaseClient = null;
let currentResourcesList = [];
let selectedUploadFile = null;

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  initSupabaseClient();
  checkAuthSession();
  initDropzone();
});

// ==================== 1. AUTHENTICATION ====================
function checkAuthSession() {
  const isAuthed = sessionStorage.getItem("enipay_admin_authed");
  const lockScreen = document.getElementById("auth-lockscreen");
  const dashboard = document.getElementById("admin-dashboard");

  if (isAuthed === "true") {
    if (lockScreen) lockScreen.classList.add("hidden");
    if (dashboard) dashboard.classList.remove("hidden");
    loadAllResources();
  } else {
    if (lockScreen) lockScreen.classList.remove("hidden");
    if (dashboard) dashboard.classList.add("hidden");
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const inputPass = document.getElementById("admin-pass-input").value;
  const savedPass = localStorage.getItem(STORAGE_KEY_PASS) || "enipay888";

  if (inputPass === savedPass) {
    sessionStorage.setItem("enipay_admin_authed", "true");
    showAdminToast("✓ 验证成功，欢迎进入管理后台！");
    checkAuthSession();
  } else {
    alert("密码错误，请重试！");
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem("enipay_admin_authed");
  checkAuthSession();
  showAdminToast("已安全退出后台");
}

// ==================== 2. SUPABASE INITIALIZATION ====================
function initSupabaseClient() {
  const url = localStorage.getItem(STORAGE_KEY_URL) || "https://dudwovszbkhwghfylxwu.supabase.co"; // Default or custom
  const key = localStorage.getItem(STORAGE_KEY_KEY) || "";

  const badge = document.getElementById("supabase-status-badge");

  if (url && key && window.supabase) {
    try {
      supabaseClient = window.supabase.createClient(url, key);
      if (badge) {
        badge.innerText = "● SUPABASE 已连接";
        badge.className = "cyber-pill text-[9px] py-0.5 px-2 bg-cyan-neon/15 text-cyan-neon border-cyan-neon/30";
      }
    } catch (err) {
      if (badge) {
        badge.innerText = "● 本地模式 (离线)";
        badge.className = "cyber-pill text-[9px] py-0.5 px-2 bg-yellow-500/15 text-yellow-400 border-yellow-500/30";
      }
    }
  } else {
    if (badge) {
      badge.innerText = "● 未配置 Supabase (本地模式)";
      badge.className = "cyber-pill text-[9px] py-0.5 px-2 bg-yellow-500/15 text-yellow-400 border-yellow-500/30";
    }
  }
}

// ==================== 3. DROPZONE & FILE HANDLING ====================
function initDropzone() {
  const dropzone = document.getElementById("file-dropzone");
  if (!dropzone) return;

  ["dragenter", "dragover"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files && files.length > 0) {
      handleFileSelected(files[0]);
    }
  });
}

function handleFileSelected(file) {
  if (!file) return;
  selectedUploadFile = file;

  const dropText = document.getElementById("dropzone-text");
  const dropSub = document.getElementById("dropzone-sub");
  const titleInput = document.getElementById("field-title");
  const catSelect = document.getElementById("field-category");
  const badgeInput = document.getElementById("field-badge");

  const sizeMb = (file.size / (1024 * 1024)).toFixed(1) + " MB";
  if (dropText) dropText.innerHTML = `已选择：<span class="text-cyan-neon font-bold">${file.name}</span> (${sizeMb})`;
  if (dropSub) dropSub.innerText = "点击可重新选择文件";

  // Auto-fill title from filename
  if (titleInput && !titleInput.value) {
    const rawName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    titleInput.value = rawName;
  }

  // Auto detect category
  const ext = file.name.split('.').pop().toLowerCase();
  if (["mp4", "mov", "webm", "avi"].includes(ext)) {
    if (catSelect) catSelect.value = "videos";
    if (badgeInput) badgeInput.value = "官方视频";
    document.getElementById("field-can-download").checked = false; // Videos default to no download
  } else if (["pdf", "docx", "pptx"].includes(ext)) {
    if (catSelect) catSelect.value = "docs";
    if (badgeInput) badgeInput.value = "官方文档";
    document.getElementById("field-can-download").checked = true;
  } else if (["png", "jpg", "jpeg", "webp"].includes(ext)) {
    if (file.name.toUpperCase().includes("Q") && (file.name.toUpperCase().includes("Q1") || file.name.toUpperCase().includes("Q2"))) {
      if (catSelect) catSelect.value = "qa";
      if (badgeInput) badgeInput.value = "市场答疑";
    } else {
      if (catSelect) catSelect.value = "posters";
      if (badgeInput) badgeInput.value = "宣传物料";
    }
  }
}

// ==================== 4. RESOURCE UPLOAD HANDLER ====================
async function handleResourceUpload(e) {
  e.preventDefault();

  const title = document.getElementById("field-title").value.trim();
  const subtitle = document.getElementById("field-subtitle").value.trim();
  const category = document.getElementById("field-category").value;
  const badge = document.getElementById("field-badge").value.trim() || "官方物料";
  const badgeColor = document.getElementById("field-badge-color").value;
  const customUrl = document.getElementById("field-custom-url").value.trim();
  const canDownload = document.getElementById("field-can-download").checked;
  const canPreview = document.getElementById("field-can-preview").checked;

  const btn = document.getElementById("btn-submit-upload");
  const progressBox = document.getElementById("upload-progress-box");
  const progressBar = document.getElementById("upload-progress-bar");
  const progressPercent = document.getElementById("upload-progress-percent");

  let publicUrl = customUrl;
  let fileType = "FILE";
  let sizeStr = "";

  if (selectedUploadFile) {
    const ext = selectedUploadFile.name.split('.').pop().toUpperCase();
    fileType = ext;
    sizeStr = (selectedUploadFile.size / (1024 * 1024)).toFixed(1) + " MB";

    // If Supabase is connected, upload to Storage Bucket
    if (supabaseClient) {
      if (btn) btn.disabled = true;
      if (progressBox) progressBox.classList.remove("hidden");
      if (progressBar) progressBar.style.width = "20%";
      if (progressPercent) progressPercent.innerText = "20%";

      const bucketName = localStorage.getItem(STORAGE_KEY_BUCKET) || "enipay-assets";
      const cleanFileName = `${Date.now()}_${selectedUploadFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const storagePath = `${category}/${cleanFileName}`;

      try {
        if (progressBar) progressBar.style.width = "50%";
        if (progressPercent) progressPercent.innerText = "50%";

        const { data: uploadData, error: uploadError } = await supabaseClient.storage
          .from(bucketName)
          .upload(storagePath, selectedUploadFile, { upsert: true });

        if (uploadError) throw uploadError;

        if (progressBar) progressBar.style.width = "85%";
        if (progressPercent) progressPercent.innerText = "85%";

        const { data: urlData } = supabaseClient.storage
          .from(bucketName)
          .getPublicUrl(storagePath);

        publicUrl = urlData.publicUrl;
      } catch (uploadErr) {
        alert("Supabase Storage 上传失败: " + uploadErr.message + "。将为您保存本地记录。");
        publicUrl = `./ENI资料库/${category}/${selectedUploadFile.name}`;
      }
    } else {
      // Offline fallback: relative path
      publicUrl = `./ENI资料库/${category}/${selectedUploadFile.name}`;
    }
  }

  if (!publicUrl) {
    alert("请选择文件或输入有效直链！");
    return;
  }

  // Determine Preview Type & Icon
  let previewType = "none";
  let icon = "📄";
  if (category === "videos" || ["MP4", "MOV", "WEBM"].includes(fileType)) {
    previewType = "video";
    icon = "🎬";
  } else if (category === "docs" || fileType === "PDF") {
    previewType = "pdf";
    icon = "📑";
  } else if (["PNG", "JPG", "JPEG", "WEBP"].includes(fileType)) {
    previewType = "image";
    icon = "🖼️";
  }

  const newResource = {
    id: "res_" + Date.now(),
    category: category,
    type: fileType,
    title: title,
    subtitle: subtitle,
    path: publicUrl,
    thumb: previewType === "image" ? publicUrl : "",
    size: sizeStr,
    badge: badge,
    badge_color: badgeColor,
    icon: icon,
    can_preview: canPreview,
    can_download: canDownload,
    preview_type: previewType,
    sort_order: 0,
    created_at: new Date().toISOString()
  };

  // Save to Supabase Table or LocalStorage
  if (supabaseClient) {
    try {
      const { error: dbError } = await supabaseClient
        .from("resources")
        .insert([newResource]);

      if (dbError) throw dbError;
      showAdminToast("✓ 资料已成功发布到 Supabase 云端并在前台生效！");
    } catch (dbErr) {
      console.warn("DB Insert fallback:", dbErr);
      saveToLocalDb(newResource);
      showAdminToast("✓ 资料已保存到本地离线数据库！");
    }
  } else {
    saveToLocalDb(newResource);
    showAdminToast("✓ 资料已保存到本地缓存！");
  }

  // Reset Form
  if (progressBox) progressBox.classList.add("hidden");
  if (btn) btn.disabled = false;
  document.getElementById("upload-form").reset();
  selectedUploadFile = null;
  document.getElementById("dropzone-text").innerText = "点击选择文件，或将文件拖拽至此处";
  document.getElementById("dropzone-sub").innerText = "支持 PDF、MP4、PNG、JPG、PPTX、PSD、DOCX 等所有格式";

  // Reload List
  loadAllResources();
  switchAdminTab('list', document.querySelectorAll('.admin-tab-btn')[1]);
}

// ==================== 5. LOAD & RENDER RESOURCES LIST ====================
async function loadAllResources() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from("resources")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      currentResourcesList = data || [];
    } catch (err) {
      console.warn("Supabase fetch failed, loading local fallback:", err);
      currentResourcesList = getLocalDb();
    }
  } else {
    currentResourcesList = getLocalDb();
  }

  const countBadge = document.getElementById("tab-count-lbl");
  if (countBadge) countBadge.innerText = currentResourcesList.length;

  renderAdminList();
}

function renderAdminList() {
  const container = document.getElementById("admin-table-container");
  const filterCat = document.getElementById("admin-filter-cat").value;
  const searchQ = document.getElementById("admin-search-input").value.toLowerCase().trim();

  if (!container) return;

  const filtered = currentResourcesList.filter((item) => {
    const matchCat = filterCat === "all" || item.category === filterCat;
    const matchSearch =
      !searchQ ||
      item.title.toLowerCase().includes(searchQ) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(searchQ)) ||
      item.type.toLowerCase().includes(searchQ);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 admin-card p-6">
        <div class="text-4xl mb-2">📂</div>
        <div class="text-sm font-bold text-slate-300">暂无匹配的资料记录</div>
        <div class="text-xs text-slate-500 mt-1">可在“上传新增资料”标签中添加新资料</div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((item) => {
      return `
        <div class="admin-card p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-cyan-neon/40 transition-all">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <div class="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-xl flex-shrink-0">
              ${item.icon || '📄'}
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 mb-0.5 flex-wrap">
                <span class="cyber-pill text-[9px] py-0.2 px-1.5 bg-cyan-neon/15 text-cyan-neon border-cyan-neon/30 font-bold">
                  ${item.badge || item.category}
                </span>
                <span class="text-[10px] font-mono text-slate-400 font-bold">${item.type}</span>
                ${item.size ? `<span class="text-[10px] text-slate-500 font-mono">· ${item.size}</span>` : ""}
              </div>
              <div class="text-xs sm:text-sm font-bold text-white truncate" title="${item.title}">
                ${item.title}
              </div>
              <div class="text-[11px] text-slate-400 truncate" title="${item.subtitle || ''}">
                ${item.subtitle || item.path}
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
            <a href="${item.path}" target="_blank" class="py-1 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-bright text-xs font-bold transition-all">
              👁️ 查看
            </a>
            <button onclick="deleteResource('${item.id}')" class="py-1 px-2.5 rounded-lg bg-red-500/15 hover:bg-red-500/25 border border-red-500/40 text-red-400 text-xs font-bold transition-all">
              🗑️ 删除
            </button>
          </div>
        </div>
      `;
    })
    .join("");
}

// ==================== 6. DELETE RESOURCE ====================
async function deleteResource(id) {
  if (!confirm("确定要从资料库中删除此文件记录吗？前台将同步移除该资料。")) return;

  if (supabaseClient) {
    try {
      const { error } = await supabaseClient
        .from("resources")
        .delete()
        .eq("id", id);

      if (error) throw error;
      showAdminToast("✓ 资料已从 Supabase 成功删除！");
    } catch (err) {
      alert("删除失败: " + err.message);
    }
  }

  // Remove from local cache
  deleteFromLocalDb(id);
  loadAllResources();
}

// ==================== 7. LOCAL STORAGE FALLBACK DB ====================
function getLocalDb() {
  const raw = localStorage.getItem(STORAGE_KEY_LOCAL_DB);
  if (raw) {
    try { return JSON.parse(raw); } catch (e) {}
  }
  // If empty, return base dataset from window if available
  if (window.RESOURCES_DATA) return window.RESOURCES_DATA;
  return [];
}

function saveToLocalDb(item) {
  const list = getLocalDb();
  list.unshift(item);
  localStorage.setItem(STORAGE_KEY_LOCAL_DB, JSON.stringify(list));
}

function deleteFromLocalDb(id) {
  let list = getLocalDb();
  list = list.filter(i => i.id !== id);
  localStorage.setItem(STORAGE_KEY_LOCAL_DB, JSON.stringify(list));
}

// ==================== 8. ONE-CLICK SEED TO SUPABASE ====================
async function seedDefaultResourcesToSupabase() {
  if (!supabaseClient) {
    alert("请先点击右上角【⚙️ Supabase 配置】填入有效的 Project URL 和 Key 后再执行导入！");
    openConfigModal();
    return;
  }

  const btn = document.getElementById("btn-seed");
  if (btn) {
    btn.disabled = true;
    btn.innerText = "⏳ 正在导入 35+ 项资料至 Supabase...";
  }

  try {
    // Import from resources.js default dataset if available
    const defaultData = window.RESOURCES_DATA || [];
    if (defaultData.length === 0) {
      alert("未找到初始数据源，请检查 resources.js 是否正常载入。");
      return;
    }

    const payload = defaultData.map((item, idx) => ({
      id: item.id || `res_init_${idx}`,
      category: item.category,
      type: item.type,
      title: item.title,
      subtitle: item.subtitle || "",
      path: item.path,
      thumb: item.thumb || "",
      size: item.size || "",
      badge: item.badge || "",
      badge_color: item.badgeColor || "cyan",
      icon: item.icon || "📄",
      can_preview: item.canPreview !== false,
      can_download: item.canDownload !== false,
      preview_type: item.previewType || "none",
      sort_order: idx,
      created_at: new Date().toISOString()
    }));

    const { error } = await supabaseClient
      .from("resources")
      .upsert(payload, { onConflict: "id" });

    if (error) throw error;

    showAdminToast("🎉 35+ 项官方素材已成功全量初始化至 Supabase 数据库！");
    loadAllResources();
  } catch (err) {
    alert("导入失败: " + err.message + "\n\n请确保在 Supabase SQL Editor 中已先运行建表语句。");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerText = "⚡ 立即执行一键导入";
    }
  }
}

function copySqlStatement() {
  const sql = `-- 1. 创建 resources 数据表
CREATE TABLE IF NOT EXISTS resources (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  path TEXT NOT NULL,
  thumb TEXT,
  size TEXT,
  badge TEXT,
  badge_color TEXT DEFAULT 'cyan',
  icon TEXT DEFAULT '📄',
  can_preview BOOLEAN DEFAULT true,
  can_download BOOLEAN DEFAULT true,
  preview_type TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. 开启公开可读写权限 (Public Access)
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Access" ON resources FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON resources FOR ALL USING (true);`;

  navigator.clipboard.writeText(sql).then(() => {
    showAdminToast("✓ SQL 建表语句已复制到剪贴板！");
  });
}

// ==================== 9. TABS & MODALS ====================
function switchAdminTab(tabId, btnElement) {
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.add("hidden"));

  if (btnElement) btnElement.classList.add("active");
  const target = document.getElementById("tab-" + tabId);
  if (target) target.classList.remove("hidden");

  if (tabId === "list") {
    loadAllResources();
  }
}

function openConfigModal() {
  const modal = document.getElementById("config-modal");
  document.getElementById("cfg-supabase-url").value = localStorage.getItem(STORAGE_KEY_URL) || "";
  document.getElementById("cfg-supabase-key").value = localStorage.getItem(STORAGE_KEY_KEY) || "";
  document.getElementById("cfg-supabase-bucket").value = localStorage.getItem(STORAGE_KEY_BUCKET) || "enipay-assets";
  if (modal) modal.classList.remove("hidden"), modal.classList.add("flex");
}

function closeConfigModal() {
  const modal = document.getElementById("config-modal");
  if (modal) modal.classList.add("hidden"), modal.classList.remove("flex");
}

function saveSupabaseConfig() {
  const url = document.getElementById("cfg-supabase-url").value.trim();
  const key = document.getElementById("cfg-supabase-key").value.trim();
  const bucket = document.getElementById("cfg-supabase-bucket").value.trim() || "enipay-assets";
  const newPass = document.getElementById("cfg-admin-pass").value.trim();

  localStorage.setItem(STORAGE_KEY_URL, url);
  localStorage.setItem(STORAGE_KEY_KEY, key);
  localStorage.setItem(STORAGE_KEY_BUCKET, bucket);

  if (newPass) {
    localStorage.setItem(STORAGE_KEY_PASS, newPass);
    showAdminToast("✓ 后台管理员密码已修改！");
  }

  initSupabaseClient();
  closeConfigModal();
  showAdminToast("✓ Supabase 配置已保存！");
  loadAllResources();
}

async function testSupabaseConnection() {
  const url = document.getElementById("cfg-supabase-url").value.trim();
  const key = document.getElementById("cfg-supabase-key").value.trim();

  if (!url || !key) {
    alert("请先输入 Supabase URL 和 Key！");
    return;
  }

  try {
    const testClient = window.supabase.createClient(url, key);
    const { data, error } = await testClient.from("resources").select("id").limit(1);
    if (error) throw error;
    alert("🎉 连接成功！Supabase 数据库畅通无阻。");
  } catch (err) {
    alert("连接测试返回提示: " + err.message);
  }
}

function showAdminToast(msg) {
  const toast = document.getElementById("admin-toast");
  const msgEl = document.getElementById("admin-toast-msg");
  if (toast && msgEl) {
    msgEl.innerText = msg;
    toast.classList.remove("translate-y-24", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
    setTimeout(() => {
      toast.classList.add("translate-y-24", "opacity-0");
      toast.classList.remove("translate-y-0", "opacity-100");
    }, 2800);
  }
}
