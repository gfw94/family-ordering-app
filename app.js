const STORAGE_KEY = 'family_ordering_web_v1';

const builtinHomeDishes = [
  {
    id: 'dish-001',
    name: '番茄牛腩',
    price: 38,
    description: '酸甜开胃，适合两人份。',
    coverUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['热销', '汤菜', '家常'],
    source: 'builtin',
    sourceCategory: '家常',
    ingredients: [
      { name: '番茄', amount: '2个' },
      { name: '牛腩', amount: '500g' },
      { name: '土豆', amount: '1个' }
    ]
  },
  {
    id: 'dish-002',
    name: '蒜香排骨',
    price: 42,
    description: '外酥里嫩，适合晚餐。',
    coverUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['dinner'],
    enabled: true,
    tags: ['招牌', '家常'],
    source: 'builtin',
    sourceCategory: '家常',
    ingredients: [
      { name: '排骨', amount: '600g' },
      { name: '蒜末', amount: '30g' },
      { name: '生抽', amount: '20ml' }
    ]
  },
  {
    id: 'dish-003',
    name: '清炒时蔬',
    price: 16,
    description: '每日新鲜蔬菜，少油清爽。',
    coverUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['清淡', '家常'],
    source: 'builtin',
    sourceCategory: '家常',
    ingredients: [
      { name: '青菜', amount: '300g' },
      { name: '蒜瓣', amount: '3瓣' }
    ]
  },
  {
    id: 'dish-home-004',
    name: '青椒肉丝',
    price: 26,
    description: '下饭经典，微辣鲜香。',
    coverUrl: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '下饭', '炒菜'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '猪里脊', amount: '250g' },
      { name: '青椒', amount: '2个' },
      { name: '胡萝卜', amount: '半根' }
    ]
  },
  {
    id: 'dish-home-005',
    name: '宫保鸡丁',
    price: 30,
    description: '酸甜微辣，花生香脆。',
    coverUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '鸡肉', '炒菜'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '鸡胸肉', amount: '300g' },
      { name: '花生米', amount: '80g' },
      { name: '黄瓜', amount: '1根' }
    ]
  },
  {
    id: 'dish-home-006',
    name: '蒜蓉西兰花',
    price: 18,
    description: '清爽解腻，做法简单。',
    coverUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '素菜', '清淡'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '西兰花', amount: '300g' },
      { name: '蒜末', amount: '20g' }
    ]
  },
  {
    id: 'dish-home-007',
    name: '木须肉',
    price: 28,
    description: '鸡蛋木耳搭配，口感丰富。',
    coverUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '炒菜', '鸡蛋'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '猪肉片', amount: '250g' },
      { name: '鸡蛋', amount: '2个' },
      { name: '木耳', amount: '80g' },
      { name: '黄瓜', amount: '1根' }
    ]
  },
  {
    id: 'dish-home-008',
    name: '鱼香茄子',
    price: 22,
    description: '酱香浓郁，特别下饭。',
    coverUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['dinner'],
    enabled: true,
    tags: ['家常', '茄子', '下饭'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '茄子', amount: '2根' },
      { name: '蒜末', amount: '15g' },
      { name: '肉末', amount: '100g' }
    ]
  },
  {
    id: 'dish-home-009',
    name: '番茄炒蛋',
    price: 16,
    description: '人人都能接受的经典家常菜。',
    coverUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '鸡蛋', '经典'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '番茄', amount: '3个' },
      { name: '鸡蛋', amount: '3个' }
    ]
  },
  {
    id: 'dish-home-010',
    name: '干煸豆角',
    price: 19,
    description: '咸香入味，适合配米饭。',
    coverUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '素菜', '炒菜'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '豆角', amount: '350g' },
      { name: '肉末', amount: '80g' },
      { name: '蒜末', amount: '15g' }
    ]
  },
  {
    id: 'dish-home-011',
    name: '香干肉丝',
    price: 24,
    description: '豆干有嚼劲，口味偏香辣。',
    coverUrl: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '豆制品', '炒菜'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '香干', amount: '4片' },
      { name: '猪里脊', amount: '200g' },
      { name: '青椒', amount: '2个' }
    ]
  },
  {
    id: 'dish-home-012',
    name: '芹菜香干',
    price: 17,
    description: '简单清爽，做一盘很快。',
    coverUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '素菜', '快手'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '芹菜', amount: '250g' },
      { name: '香干', amount: '3片' }
    ]
  },
  {
    id: 'dish-home-013',
    name: '辣椒炒鸡蛋',
    price: 15,
    description: '香辣开胃，特别适合夏天。',
    coverUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['家常', '鸡蛋', '微辣'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '鸡蛋', amount: '3个' },
      { name: '青椒', amount: '3个' }
    ]
  },
  {
    id: 'dish-home-014',
    name: '回锅肉',
    price: 32,
    description: '香而不腻，经典川味下饭菜。',
    coverUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['dinner'],
    enabled: true,
    tags: ['家常', '川味', '下饭'],
    source: 'builtin',
    sourceCategory: '家常炒菜',
    ingredients: [
      { name: '五花肉', amount: '350g' },
      { name: '青椒', amount: '2个' },
      { name: '蒜苗', amount: '2根' }
    ]
  },
  {
    id: 'dish-sc-015',
    name: '麻婆豆腐',
    price: 20,
    description: '麻辣鲜香，拌饭很合适。',
    coverUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['川菜', '家常', '豆腐'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '嫩豆腐', amount: '1盒' },
      { name: '牛肉末', amount: '100g' },
      { name: '豆瓣酱', amount: '25g' }
    ]
  },
  {
    id: 'dish-sc-016',
    name: '水煮肉片',
    price: 36,
    description: '麻辣过瘾，适合周末重口味。',
    coverUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['dinner'],
    enabled: true,
    tags: ['川菜', '麻辣', '肉片'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '里脊肉', amount: '300g' },
      { name: '豆芽', amount: '250g' },
      { name: '生菜', amount: '200g' }
    ]
  },
  {
    id: 'dish-sc-017',
    name: '鱼香肉丝',
    price: 27,
    description: '酸甜微辣，经典川味家常菜。',
    coverUrl: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['川菜', '下饭', '肉丝'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '猪里脊', amount: '250g' },
      { name: '木耳', amount: '60g' },
      { name: '胡萝卜', amount: '半根' }
    ]
  },
  {
    id: 'dish-sc-018',
    name: '辣子鸡',
    price: 34,
    description: '干香麻辣，适合晚餐。',
    coverUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['dinner'],
    enabled: true,
    tags: ['川菜', '鸡肉', '麻辣'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '鸡腿肉', amount: '500g' },
      { name: '干辣椒', amount: '30g' },
      { name: '花椒', amount: '10g' }
    ]
  },
  {
    id: 'dish-sc-019',
    name: '干锅花菜',
    price: 22,
    description: '焦香爽脆，适合搭配米饭。',
    coverUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['川菜', '素菜', '干锅'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '花菜', amount: '350g' },
      { name: '五花肉', amount: '80g' },
      { name: '青椒', amount: '1个' }
    ]
  },
  {
    id: 'dish-sc-020',
    name: '酸辣土豆丝',
    price: 15,
    description: '开胃爽口，快手下饭菜。',
    coverUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['川菜', '素菜', '快手'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '土豆', amount: '2个' },
      { name: '干辣椒', amount: '6个' },
      { name: '香醋', amount: '20ml' }
    ]
  },
  {
    id: 'dish-sc-021',
    name: '青椒回锅腊肉',
    price: 33,
    description: '咸香有嚼劲，适合重口味。',
    coverUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['dinner'],
    enabled: true,
    tags: ['川菜', '腊肉', '下饭'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '腊肉', amount: '250g' },
      { name: '青椒', amount: '3个' },
      { name: '蒜苗', amount: '2根' }
    ]
  },
  {
    id: 'dish-sc-022',
    name: '泡椒牛肉丝',
    price: 35,
    description: '泡椒香气足，肉丝滑嫩。',
    coverUrl: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['川菜', '牛肉', '泡椒'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '牛里脊', amount: '250g' },
      { name: '泡椒', amount: '60g' },
      { name: '芹菜', amount: '120g' }
    ]
  },
  {
    id: 'dish-sc-023',
    name: '蒜泥白肉',
    price: 29,
    description: '香辣蒜香味足，凉热都能吃。',
    coverUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['川菜', '凉菜', '蒜香'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '五花肉', amount: '300g' },
      { name: '蒜泥', amount: '25g' },
      { name: '红油', amount: '20ml' }
    ]
  },
  {
    id: 'dish-sc-024',
    name: '小炒黄牛肉',
    price: 39,
    description: '香辣鲜嫩，很适合招待朋友。',
    coverUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['dinner'],
    enabled: true,
    tags: ['川菜', '牛肉', '招牌'],
    source: 'builtin',
    sourceCategory: '川菜家常',
    ingredients: [
      { name: '黄牛肉', amount: '300g' },
      { name: '小米椒', amount: '30g' },
      { name: '香菜', amount: '40g' }
    ]
  }
];

const seedData = {
  users: [
    { id: 'wife-001', nickname: '老婆', role: 'user', phone: '13800000000' },
    { id: 'admin-001', nickname: '管理员', role: 'admin', phone: '13900000000' }
  ],
  slots: [
    { id: 'lunch', label: '午餐 11:30-13:30', enabled: true },
    { id: 'dinner', label: '晚餐 17:30-20:00', enabled: true }
  ],
  dishes: builtinHomeDishes,
  orders: [],
  purchaseChecks: {},
  favoriteDishIds: []
};

const publicRecipeFallback = [
  {
    id: 'fallback-001',
    name: '咖喱鸡肉饭',
    price: 36,
    description: '带一点浓郁咖喱香，适合晚餐推荐。',
    coverUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['导入', '咖喱', '鸡肉'],
    source: 'fallback',
    sourceCategory: '家常',
    ingredients: [
      { name: '鸡腿肉', amount: '400g' },
      { name: '土豆', amount: '2个' },
      { name: '洋葱', amount: '1个' }
    ]
  },
  {
    id: 'fallback-002',
    name: '奶油蘑菇意面',
    price: 32,
    description: '奶香浓郁，口味温和。',
    coverUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['导入', '意面', '奶香'],
    source: 'fallback',
    sourceCategory: '西式',
    ingredients: [
      { name: '意面', amount: '250g' },
      { name: '蘑菇', amount: '200g' },
      { name: '淡奶油', amount: '200ml' }
    ]
  },
  {
    id: 'fallback-003',
    name: '照烧三文鱼',
    price: 48,
    description: '甜咸平衡，适合做轻食晚餐。',
    coverUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['dinner'],
    enabled: true,
    tags: ['导入', '鱼类', '低负担'],
    source: 'fallback',
    sourceCategory: '日式',
    ingredients: [
      { name: '三文鱼', amount: '300g' },
      { name: '照烧汁', amount: '60ml' },
      { name: '西兰花', amount: '200g' }
    ]
  }
];

const statusMap = {
  pending: '待确认',
  confirmed: '已确认',
  cancelled: '已取消'
};

const REMOTE_SYNC_INTERVAL = 20000;

const state = {
  data: loadData(),
  currentUser: null,
  currentView: 'dashboard',
  selectedDate: getNextDays(7)[0].value,
  selectedSlot: 'lunch',
  editingDishId: '',
  editingSlotId: '',
  remoteSyncTimer: null,
  backendMeta: {
    available: false
  },
  syncMeta: {
    status: 'idle',
    message: '当前为本地模式'
  }
};

const elements = {
  loginView: document.querySelector('#loginView'),
  dashboardView: document.querySelector('#dashboardView'),
  menuView: document.querySelector('#menuView'),
  ordersView: document.querySelector('#ordersView'),
  adminView: document.querySelector('#adminView'),
  userSummary: document.querySelector('#userSummary'),
  nav: document.querySelector('#nav'),
  logoutButton: document.querySelector('#logoutButton'),
  orderDialog: document.querySelector('#orderDialog'),
  orderDialogBody: document.querySelector('#orderDialogBody')
};

bootstrap();

async function bootstrap() {
  const cachedUserId = localStorage.getItem('family_ordering_current_user');
  if (cachedUserId) {
    state.currentUser = state.data.users.find((item) => item.id === cachedUserId) || null;
  }

  bindGlobalEvents();
  applyBootstrapRemoteConfig();
  state.backendMeta.available = await probeBackendApi();
  if (hasBackendApi()) {
    await syncFromBackend({ quiet: true, seedIfEmpty: true });
    startRemotePolling();
  } else if (hasRemoteSyncEnabled()) {
    await syncFromRemote({ quiet: true, seedIfEmpty: true });
    startRemotePolling();
  }
  renderAll();
}

function bindGlobalEvents() {
  elements.logoutButton.addEventListener('click', () => {
    state.currentUser = null;
    localStorage.removeItem('family_ordering_current_user');
    renderAll();
  });

  document.querySelector('#nav').addEventListener('click', (event) => {
    const button = event.target.closest('[data-view]');
    if (!button) {
      return;
    }
    const nextView = button.dataset.view;
    if (nextView === 'admin' && state.currentUser.role !== 'admin') {
      return;
    }
    state.currentView = nextView;
    renderAll();
  });

  elements.orderDialog.addEventListener('click', (event) => {
    if (event.target === elements.orderDialog) {
      elements.orderDialog.close();
    }
  });
}

function renderAll() {
  renderChrome();
  renderLogin();
  renderDashboard();
  renderMenu();
  renderOrders();
  renderAdmin();
  syncVisibleView();
}

function renderChrome() {
  const loggedIn = Boolean(state.currentUser);
  elements.userSummary.classList.toggle('hidden', !loggedIn);
  elements.nav.classList.toggle('hidden', !loggedIn);
  elements.logoutButton.classList.toggle('hidden', !loggedIn);

  if (!loggedIn) {
    elements.userSummary.innerHTML = '';
    return;
  }

  elements.userSummary.innerHTML = `
    <strong>${escapeHtml(state.currentUser.nickname)}</strong>
    <span>${state.currentUser.role === 'admin' ? '管理员身份' : '点菜人身份'}</span>
  `;

  document.querySelectorAll('.nav-link').forEach((button) => {
    const view = button.dataset.view;
    const shouldShow = state.currentUser.role === 'admin'
      ? ['dashboard', 'admin'].includes(view)
      : ['dashboard', 'menu', 'orders'].includes(view);
    button.classList.toggle('hidden', !shouldShow);
    button.classList.toggle('active', button.dataset.view === state.currentView);
  });
}

function renderLogin() {
  const loginCards = state.data.users.map((user) => `
    <article class="login-card">
      <div class="tag">${user.role === 'admin' ? '管理员' : '老婆点菜'}</div>
      <h2 class="login-name">${escapeHtml(user.nickname)}</h2>
      <div class="login-role">手机号 ${escapeHtml(user.phone)}</div>
      <p class="muted">${user.role === 'admin' ? '负责审核订单，并自动查看需要采购的配菜清单。' : '负责按时间点菜和提交订单。'}</p>
      <button class="primary-button" data-login-id="${user.id}">用这个身份进入</button>
    </article>
  `).join('');

  elements.loginView.innerHTML = `
    <section class="hero-card">
      <div>
        <div class="tag">网页版，不依赖微信开发者工具</div>
        <h2>先把家里点菜这件事跑起来</h2>
        <p>这个版本直接用浏览器打开就能用，适合你当前只有 PC 微信和电脑浏览器的情况。</p>
      </div>
      <div class="panel">
        <div class="section-title">演示说明</div>
        <p class="section-subtitle">数据保存在浏览器本地。刷新不会丢，换浏览器会看不到原来的数据。</p>
      </div>
    </section>
    <section class="panel">
      <div class="section-head">
        <div>
          <h2 class="section-title">选择身份登录</h2>
          <p class="section-subtitle">老婆负责点菜，管理员负责审核和采购。</p>
        </div>
      </div>
      <div class="login-grid">${loginCards}</div>
    </section>
  `;

  elements.loginView.querySelectorAll('[data-login-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const userId = button.dataset.loginId;
      state.currentUser = state.data.users.find((item) => item.id === userId) || null;
      state.currentView = 'dashboard';
      localStorage.setItem('family_ordering_current_user', userId);
      renderAll();
    });
  });
}

function renderDashboard() {
  if (!state.currentUser) {
    elements.dashboardView.innerHTML = '';
    return;
  }

  const activeDishes = state.data.dishes.filter((item) => item.enabled);
  const activeSlots = state.data.slots.filter((item) => item.enabled);
  const myOrders = getOrdersForCurrentUser();
  const pendingOrders = state.data.orders.filter((item) => item.status === 'pending').length;
  const purchaseSummary = buildPurchaseSummary(state.data.orders, state.data.dishes, state.data.purchaseChecks);

  elements.dashboardView.innerHTML = `
    <section class="hero-card">
      <div>
        <div class="tag">${state.currentUser.role === 'admin' ? '审核采购' : '老婆点菜'}</div>
        <h2>${escapeHtml(state.currentUser.nickname)}，今天想怎么安排这顿饭？</h2>
        <p>${state.currentUser.role === 'admin' ? '你负责审核老婆提交的订单，确认后系统会自动汇总要买的配菜。' : '先选日期和时段，再从菜里挑一份喜欢的。'}</p>
      </div>
      <div class="panel">
        <div class="section-title">今日概览</div>
        <p class="section-subtitle">${escapeHtml(state.syncMeta.message)}</p>
      </div>
    </section>
    <section class="grid-3">
      <article class="stat-card"><strong>${activeDishes.length}</strong><span>可点菜品</span></article>
      <article class="stat-card"><strong>${activeSlots.length}</strong><span>可用时段</span></article>
      <article class="stat-card"><strong>${state.currentUser.role === 'admin' ? pendingOrders : myOrders.length}</strong><span>${state.currentUser.role === 'admin' ? '待审核订单' : '我的订单'}</span></article>
    </section>
    <section class="panel">
      <div class="section-head">
        <div>
          <h2 class="section-title">快捷入口</h2>
          <p class="section-subtitle">先跑通家用场景，后面再接微信能力。</p>
        </div>
      </div>
      <div class="button-row">
        ${state.currentUser.role === 'admin'
          ? '<button class="primary-button" data-jump="admin">打开管理后台</button>'
          : '<button class="primary-button" data-jump="menu">去点菜</button><button class="secondary-button" data-jump="orders">看我的订单</button>'}
      </div>
    </section>
    ${state.currentUser.role === 'admin' ? `
      <section class="panel">
        <div class="section-head">
          <div>
            <h2 class="section-title">当前采购概览</h2>
            <p class="section-subtitle">这里只统计已确认订单。</p>
          </div>
        </div>
        <div class="admin-list">
          ${purchaseSummary.length ? purchaseSummary.slice(0, 5).map((item) => `
            <div class="admin-list-item">
              <div class="admin-row">
                <div>
                  <strong>${escapeHtml(item.date)}</strong>
                  <div class="hint">${escapeHtml(item.slotLabel)}</div>
                </div>
                <span class="tag">${item.items.length} 项采购</span>
              </div>
            </div>
          `).join('') : '<div class="empty-state">还没有已确认订单。</div>'}
        </div>
      </section>
    ` : ''}
  `;

  elements.dashboardView.querySelectorAll('[data-jump]').forEach((button) => {
    button.addEventListener('click', () => {
      state.currentView = button.dataset.jump;
      renderAll();
    });
  });
}

function renderMenu() {
  if (!state.currentUser || state.currentUser.role === 'admin') {
    elements.menuView.innerHTML = '';
    return;
  }

  const dates = getNextDays(7);
  const slots = state.data.slots.filter((item) => item.enabled);
  if (!slots.some((item) => item.id === state.selectedSlot) && slots[0]) {
    state.selectedSlot = slots[0].id;
  }

  const visibleDishes = state.data.dishes.filter((dish) => {
    return dish.enabled
      && dish.availableDates.includes(state.selectedDate)
      && dish.availableSlots.includes(state.selectedSlot);
  });
  const recommendedDishes = getRecommendedDishes(state.data.dishes, state.data.favoriteDishIds, state.selectedDate, state.selectedSlot);

  const dishCards = visibleDishes.length
    ? visibleDishes.map((dish) => `
        <article class="dish-card">
          <img class="dish-cover" src="${escapeAttribute(dish.coverUrl)}" alt="${escapeAttribute(dish.name)}" />
          <div class="dish-body">
            <div class="dish-topline">
              <h3 class="dish-name">${escapeHtml(dish.name)}</h3>
              <div class="price">¥${dish.price}</div>
            </div>
            <p class="muted">${escapeHtml(dish.description)}</p>
            <div class="tag-list">${dish.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
            <div class="button-row">
              <button class="secondary-button" data-favorite-dish="${dish.id}">${state.data.favoriteDishIds.includes(dish.id) ? '已喜欢' : '喜欢这道菜'}</button>
              <button class="primary-button" data-order-dish="${dish.id}">点这道菜</button>
            </div>
          </div>
        </article>
      `).join('')
    : '<div class="empty-state">这个日期和时段下暂无可点菜品，换个时间试试。</div>';

  elements.menuView.innerHTML = `
    ${recommendedDishes.length ? `
      <section class="panel">
        <div class="section-head">
          <div>
            <h2 class="section-title">猜你喜欢</h2>
            <p class="section-subtitle">根据你标记喜欢的菜，按口味标签和菜系来源推荐。</p>
          </div>
        </div>
        <div class="dish-grid recommendation-grid">
          ${recommendedDishes.map((dish) => `
            <article class="dish-card recommended-card">
              <img class="dish-cover" src="${escapeAttribute(dish.coverUrl)}" alt="${escapeAttribute(dish.name)}" />
              <div class="dish-body">
                <div class="dish-topline">
                  <h3 class="dish-name">${escapeHtml(dish.name)}</h3>
                  <div class="price">¥${dish.price}</div>
                </div>
                <p class="muted">${escapeHtml(dish.description)}</p>
                <div class="tag-list">
                  <span class="tag">推荐</span>
                  ${dish.sourceCategory ? `<span class="tag">${escapeHtml(dish.sourceCategory)}</span>` : ''}
                </div>
                <div class="button-row">
                  <button class="secondary-button" data-favorite-dish="${dish.id}">${state.data.favoriteDishIds.includes(dish.id) ? '已喜欢' : '喜欢这道菜'}</button>
                  <button class="primary-button" data-order-dish="${dish.id}">点这道菜</button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    ` : ''}
    <section class="panel">
      <div class="section-head">
        <div>
          <h2 class="section-title">点菜</h2>
          <p class="section-subtitle">按日期和时段筛选，能点的菜才会出现。点“喜欢这道菜”后，系统会给你更多相似推荐。</p>
        </div>
      </div>
      <div class="filters">
        <label>
          <div class="hint">日期</div>
          <select id="dateSelect" class="select">
            ${dates.map((item) => `<option value="${item.value}" ${item.value === state.selectedDate ? 'selected' : ''}>${item.label} ${item.value}</option>`).join('')}
          </select>
        </label>
        <label>
          <div class="hint">时段</div>
          <select id="slotSelect" class="select">
            ${slots.map((item) => `<option value="${item.id}" ${item.id === state.selectedSlot ? 'selected' : ''}>${escapeHtml(item.label)}</option>`).join('')}
          </select>
        </label>
      </div>
    </section>
    <section class="panel">
      <div class="dish-grid">${dishCards}</div>
    </section>
  `;

  elements.menuView.querySelector('#dateSelect').addEventListener('change', (event) => {
    state.selectedDate = event.target.value;
    renderMenu();
  });

  if (elements.menuView.querySelector('#slotSelect')) {
    elements.menuView.querySelector('#slotSelect').addEventListener('change', (event) => {
      state.selectedSlot = event.target.value;
      renderMenu();
    });
  }

  elements.menuView.querySelectorAll('[data-order-dish]').forEach((button) => {
    button.addEventListener('click', () => {
      const dishId = button.dataset.orderDish;
      const dish = state.data.dishes.find((item) => item.id === dishId);
      openOrderDialog(dish);
    });
  });

  elements.menuView.querySelectorAll('[data-favorite-dish]').forEach((button) => {
    button.addEventListener('click', () => {
      const dishId = button.dataset.favoriteDish;
      toggleFavoriteDish(dishId);
      renderMenu();
    });
  });
}

function renderOrders() {
  if (!state.currentUser || state.currentUser.role === 'admin') {
    elements.ordersView.innerHTML = '';
    return;
  }

  const orders = getOrdersForCurrentUser();
  const content = orders.length
    ? orders.map((order) => `
        <article class="order-card">
          <div class="order-topline">
            <h3 class="order-name">${escapeHtml(order.dishName)}</h3>
            <span class="status-pill ${order.status}">${statusMap[order.status]}</span>
          </div>
          <p class="muted">${escapeHtml(order.date)} / ${escapeHtml(order.slotLabel)} / 数量 ${order.quantity}</p>
          ${order.note ? `<p class="muted">备注：${escapeHtml(order.note)}</p>` : ''}
          <p class="hint">下单时间 ${escapeHtml(order.createdAt)}</p>
        </article>
      `).join('')
    : '<div class="empty-state">你还没有下单，去点菜页试试。</div>';

  elements.ordersView.innerHTML = `
    <section class="panel">
      <div class="section-head">
        <div>
          <h2 class="section-title">我的订单</h2>
          <p class="section-subtitle">这里只显示当前登录用户自己的订单。</p>
        </div>
      </div>
      <div class="orders-grid">${content}</div>
    </section>
  `;
}

function renderAdmin() {
  if (!state.currentUser || state.currentUser.role !== 'admin') {
    elements.adminView.innerHTML = '';
    return;
  }

  const dish = state.data.dishes.find((item) => item.id === state.editingDishId);
  const slot = state.data.slots.find((item) => item.id === state.editingSlotId);
  const datesPlaceholder = getNextDays(7).map((item) => item.value).join(',');
  const purchaseSummary = buildPurchaseSummary(state.data.orders, state.data.dishes, state.data.purchaseChecks);
  const purchaseText = buildPurchaseSummaryText(purchaseSummary);
  const weeklySummary = buildWeeklyMenuSummary(state.data.orders, state.data.dishes, state.data.purchaseChecks);

  elements.adminView.innerHTML = `
    <section class="panel">
      <div class="section-head">
        <div>
          <h2 class="section-title">管理后台</h2>
          <p class="section-subtitle">这里负责维护菜品、时间段、审核订单，并自动生成采购清单。</p>
        </div>
      </div>
      <div class="admin-columns">
        <div class="admin-card">
          <h2>共享数据配置</h2>
          <p class="hint">${hasBackendApi() ? '当前已检测到 SQLite 后端，同一网址下只要房间名一致，就会共享同一份数据。' : '如果当前只是静态页面，仍可用 Firebase 共享；如果改成 SQLite 后端运行，这里只需要房间名。'}</p>
          ${hasBackendApi() ? '' : `<input id="remoteDatabaseUrl" class="field" placeholder="Firebase Database URL，例如 https://xxx-default-rtdb.asia-southeast1.firebasedatabase.app" value="${escapeAttribute(state.data.remoteConfig.databaseUrl || '')}" />`}
          <input id="remoteRoomKey" class="field" placeholder="共享房间名，例如 family-menu" value="${escapeAttribute(state.data.remoteConfig.roomKey || '')}" />
          <div class="button-row">
            <label><input id="remoteEnabled" type="checkbox" ${state.data.remoteConfig.enabled ? 'checked' : ''} /> 启用共享模式</label>
          </div>
          <div class="button-row">
            <button id="saveRemoteConfig" class="primary-button">保存共享配置</button>
            <button id="syncRemoteNow" class="secondary-button">立即同步云端</button>
            <button id="copyShareLink" class="secondary-button">复制分享链接</button>
          </div>
          <div class="admin-list" style="margin-bottom: 20px;">
            <div class="admin-list-item">
              <strong>同步状态</strong>
              <div class="hint">${escapeHtml(state.syncMeta.message)}</div>
            </div>
          </div>

          <h2>批量导入菜谱</h2>
          <p class="hint">下厨房这类平台通常没有稳定公开接口，这里默认接公开菜谱源。导入失败时，会自动回退到内置精选菜谱。</p>
          <div class="button-row">
            <button id="importPublicRecipes" class="primary-button">批量导入公开菜谱</button>
          </div>
          <textarea id="bulkRecipeText" class="textarea" placeholder="也可以直接粘贴网页里的菜谱文本。\n\n推荐格式一：\n菜名|描述|食材1:数量,食材2:数量|标签1,标签2\n\n推荐格式二：\n菜名\n描述\n食材：青椒:2个, 里脊:250g\n标签：家常,炒菜\n时段：午餐,晚餐\n\n多个菜谱之间空一行。"></textarea>
          <div class="button-row">
            <button id="importPastedRecipes" class="secondary-button">导入粘贴的菜谱</button>
          </div>

          <div class="admin-list" style="margin-bottom: 20px;">
            <div class="admin-list-item">
              <strong>当前菜品总数</strong>
              <div class="hint">${state.data.dishes.length} 道，可继续手动编辑、粘贴导入或下架。</div>
            </div>
          </div>

          <h2>${dish ? '编辑菜品' : '新增菜品'}</h2>
          <p class="hint">图片可以传本地文件，保存后会存进浏览器本地。配菜格式示例：番茄:2个, 牛腩:500g</p>
          <div class="button-row"></div>
          <input id="dishName" class="field" placeholder="菜名" value="${dish ? escapeAttribute(dish.name) : ''}" />
          <input id="dishPrice" class="field" placeholder="价格" type="number" min="0" value="${dish ? dish.price : ''}" />
          <textarea id="dishDesc" class="textarea" placeholder="介绍">${dish ? escapeHtml(dish.description) : ''}</textarea>
          <input id="dishDates" class="field" placeholder="可点日期，逗号分隔，例如 ${datesPlaceholder}" value="${dish ? escapeAttribute(dish.availableDates.join(',')) : ''}" />
          <input id="dishIngredients" class="field" placeholder="配菜，逗号分隔，例如 番茄:2个, 牛腩:500g" value="${dish ? escapeAttribute(formatIngredientsInput(dish.ingredients)) : ''}" />
          <label class="upload-label secondary-button">
            选择图片
            <input id="dishImage" type="file" accept="image/*" />
          </label>
          <input id="dishImageUrl" class="field" placeholder="或者直接填图片地址" value="${dish ? escapeAttribute(dish.coverUrl) : ''}" />
          <div class="button-row">
            <label><input id="slotLunch" type="checkbox" ${dish && dish.availableSlots.includes('lunch') ? 'checked' : !dish ? 'checked' : ''} /> 午餐可点</label>
            <label><input id="slotDinner" type="checkbox" ${dish && dish.availableSlots.includes('dinner') ? 'checked' : !dish ? 'checked' : ''} /> 晚餐可点</label>
            <label><input id="dishEnabled" type="checkbox" ${dish ? (dish.enabled ? 'checked' : '') : 'checked'} /> 上架状态</label>
          </div>
          <div class="button-row">
            <button id="saveDishButton" class="primary-button">保存菜品</button>
            ${dish ? '<button id="cancelDishEdit" class="secondary-button">取消编辑</button>' : ''}
          </div>

          <div class="admin-list">
            ${state.data.dishes.map((item) => `
              <div class="admin-list-item">
                <div class="admin-row">
                  <div>
                    <strong>${escapeHtml(item.name)}</strong>
                    <div class="hint">¥${item.price} / ${item.enabled ? '已上架' : '已下架'}</div>
                    <div class="hint">配菜：${escapeHtml(formatIngredientsText(item.ingredients))}</div>
                    <div class="hint">来源：${escapeHtml(item.sourceCategory || (item.source === 'themealdb' ? '公开菜谱' : '自定义'))}</div>
                  </div>
                  <button class="secondary-button" data-edit-dish="${item.id}">编辑</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="admin-card">
            <h2>${slot ? '编辑时段' : '新增时段'}</h2>
            <input id="slotId" class="field" placeholder="时段编码，例如 brunch" value="${slot ? escapeAttribute(slot.id) : ''}" />
            <input id="slotLabel" class="field" placeholder="时段标题" value="${slot ? escapeAttribute(slot.label) : ''}" />
            <label><input id="slotEnabled" type="checkbox" ${slot ? (slot.enabled ? 'checked' : '') : 'checked'} /> 启用状态</label>
            <div class="button-row">
              <button id="saveSlotButton" class="primary-button">保存时段</button>
              ${slot ? '<button id="cancelSlotEdit" class="secondary-button">取消编辑</button>' : ''}
            </div>

            <div class="admin-list">
              ${state.data.slots.map((item) => `
                <div class="admin-list-item">
                  <div class="admin-row">
                    <div>
                      <strong>${escapeHtml(item.label)}</strong>
                      <div class="hint">${escapeHtml(item.id)} / ${item.enabled ? '启用' : '停用'}</div>
                    </div>
                    <button class="secondary-button" data-edit-slot="${item.id}">编辑</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="admin-card" style="margin-top: 24px;">
            <h2>订单管理</h2>
            <div class="admin-list">
              ${state.data.orders.length ? state.data.orders.map((order) => `
                <div class="admin-list-item">
                  <div class="admin-row">
                    <div>
                      <strong>${escapeHtml(order.userName)} 点了 ${escapeHtml(order.dishName)}</strong>
                      <div class="hint">${escapeHtml(order.date)} / ${escapeHtml(order.slotLabel)} / 数量 ${order.quantity}</div>
                      ${order.note ? `<div class="hint">备注：${escapeHtml(order.note)}</div>` : ''}
                    </div>
                    <span class="status-pill ${order.status}">${statusMap[order.status]}</span>
                  </div>
                  <div class="status-row" style="margin-top: 14px;">
                    <button class="status-button" data-status="confirmed" data-order-id="${order.id}">确认</button>
                    <button class="status-button" data-status="cancelled" data-order-id="${order.id}">取消</button>
                    <button class="status-button" data-status="pending" data-order-id="${order.id}">重置待确认</button>
                  </div>
                </div>
              `).join('') : '<div class="empty-state">还没有订单。</div>'}
            </div>
          </div>

          <div class="admin-card" style="margin-top: 24px;">
            <h2>已确认订单采购清单</h2>
            <p class="hint">只有确认后的订单才会进入下面的自动采购汇总，并按日期分组。</p>
            <div class="button-row">
              <button id="openPrintPurchaseSummary" class="secondary-button">打开打印版购物清单</button>
              <button id="copyPurchaseSummary" class="secondary-button">一键复制采购清单</button>
            </div>
            <div class="admin-list">
              ${purchaseSummary.length ? purchaseSummary.map((group) => `
                <div class="admin-list-item purchase-group">
                  <div class="purchase-group-head">
                    <div>
                      <strong>${escapeHtml(group.date)}</strong>
                      <div class="hint">${escapeHtml(group.slotLabel)}</div>
                    </div>
                    <span class="status-pill confirmed">${group.orderCount} 份已确认订单</span>
                  </div>
                  <div class="purchase-items">
                    ${group.items.map((item) => `
                      <div class="purchase-item-row">
                        <label class="purchase-check-row">
                          <input type="checkbox" data-purchase-check="${escapeAttribute(item.checkKey)}" ${item.checked ? 'checked' : ''} />
                          <span>${escapeHtml(item.name)}</span>
                        </label>
                        <div class="purchase-item-meta">
                          <span class="tag ${item.checked ? 'tag-checked' : ''}">${escapeHtml(item.total)}</span>
                          <span class="hint">${item.checked ? '已买' : '未买'}</span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('') : '<div class="empty-state">还没有已确认订单，确认后这里会自动出采购清单。</div>'}
            </div>
          </div>

          <div class="admin-card" style="margin-top: 24px;">
            <h2>本周菜单汇总</h2>
            <p class="hint">这里只统计未来 7 天内已确认的订单，方便一次性安排一周买菜。</p>
            <div class="button-row">
              <button id="openPrintWeeklySummary" class="secondary-button">打开打印版本周汇总</button>
            </div>
            <div class="admin-list">
              ${weeklySummary.length ? weeklySummary.map((day) => `
                <div class="admin-list-item weekly-summary-card">
                  <div class="purchase-group-head">
                    <div>
                      <strong>${escapeHtml(day.date)}</strong>
                      <div class="hint">${day.totalOrders} 份已确认订单 / ${day.slots.length} 个时段</div>
                    </div>
                    <span class="status-pill confirmed">${day.totalItems} 项采购</span>
                  </div>
                  <div class="weekly-slot-list">
                    ${day.slots.map((slot) => `
                      <div class="weekly-slot-card">
                        <div class="weekly-slot-head">
                          <strong>${escapeHtml(slot.slotLabel)}</strong>
                          <span class="tag">${slot.orders.length} 道菜</span>
                        </div>
                        <div class="hint">菜单：${escapeHtml(slot.orders.map((order) => `${order.dishName} x${order.quantity}`).join('，'))}</div>
                        <div class="weekly-item-list">
                          ${slot.items.map((item) => `
                            <div class="purchase-item-row compact-row">
                              <span>${escapeHtml(item.name)}</span>
                              <span class="tag ${item.checked ? 'tag-checked' : ''}">${escapeHtml(item.total)}</span>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('') : '<div class="empty-state">未来 7 天还没有已确认订单。</div>'}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  bindAdminEvents();
}

function bindAdminEvents() {
  const saveRemoteConfigButton = document.querySelector('#saveRemoteConfig');
  if (saveRemoteConfigButton) {
    saveRemoteConfigButton.addEventListener('click', async () => {
      updateRemoteConfigFromForm();
      if (hasBackendApi() && state.data.remoteConfig.enabled) {
        startRemotePolling();
        await syncFromBackend({ seedIfEmpty: true });
      } else if (hasRemoteSyncEnabled()) {
        startRemotePolling();
        await syncFromRemote({ seedIfEmpty: true });
      } else {
        stopRemotePolling();
        setSyncMeta('idle', '当前为本地模式');
      }
      renderAll();
    });
  }

  const syncRemoteNowButton = document.querySelector('#syncRemoteNow');
  if (syncRemoteNowButton) {
    syncRemoteNowButton.addEventListener('click', async () => {
      updateRemoteConfigFromForm();
      if (hasBackendApi()) {
        if (!state.data.remoteConfig.enabled) {
          window.alert('先启用共享模式');
          return;
        }
        await syncToBackend({ showAlertOnError: true });
        renderAll();
        return;
      }
      if (!hasRemoteSyncEnabled()) {
        window.alert('先填写数据库地址并启用共享模式');
        return;
      }
      await syncToRemote({ showAlertOnError: true });
      renderAll();
    });
  }

  const copyShareLinkButton = document.querySelector('#copyShareLink');
  if (copyShareLinkButton) {
    copyShareLinkButton.addEventListener('click', async () => {
      updateRemoteConfigFromForm();
      if (hasBackendApi()) {
        if (!state.data.remoteConfig.enabled) {
          window.alert('先启用共享模式');
          return;
        }
      } else if (!hasRemoteSyncEnabled()) {
        window.alert('先填写数据库地址并启用共享模式');
        return;
      }
      const shareLink = buildShareLink(state.data.remoteConfig);
      const copied = await copyText(shareLink);
      window.alert(copied ? '分享链接已复制，直接发给你老婆即可。' : shareLink);
    });
  }

  const importPublicRecipesButton = document.querySelector('#importPublicRecipes');
  if (importPublicRecipesButton) {
    importPublicRecipesButton.addEventListener('click', async () => {
      importPublicRecipesButton.disabled = true;
      importPublicRecipesButton.textContent = '正在导入...';
      try {
        const imported = await importPublicRecipes();
        window.alert(`已导入 ${imported} 道菜。`);
      } catch (error) {
        window.alert(error.message || '导入失败');
      } finally {
        importPublicRecipesButton.disabled = false;
        importPublicRecipesButton.textContent = '批量导入公开菜谱';
        renderAll();
      }
    });
  }

  const importPastedRecipesButton = document.querySelector('#importPastedRecipes');
  if (importPastedRecipesButton) {
    importPastedRecipesButton.addEventListener('click', () => {
      const textArea = document.querySelector('#bulkRecipeText');
      const sourceText = textArea.value.trim();
      if (!sourceText) {
        window.alert('先粘贴菜谱内容再导入');
        return;
      }

      const recipes = parseBulkRecipeText(sourceText);
      if (!recipes.length) {
        window.alert('没有识别出可导入的菜谱，请按提示格式稍微整理一下再试');
        return;
      }

      const imported = mergeImportedDishes(recipes);
      persist();
      textArea.value = '';
      renderAll();
      window.alert(`已导入 ${imported} 道菜谱`);
    });
  }

  const fileInput = document.querySelector('#dishImage');
  if (fileInput) {
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const urlField = document.querySelector('#dishImageUrl');
        urlField.value = typeof reader.result === 'string' ? reader.result : '';
      };
      reader.readAsDataURL(file);
    });
  }

  const saveDishButton = document.querySelector('#saveDishButton');
  if (saveDishButton) {
    saveDishButton.addEventListener('click', () => {
      const name = document.querySelector('#dishName').value.trim();
      const price = Number(document.querySelector('#dishPrice').value);
      const description = document.querySelector('#dishDesc').value.trim();
      const coverUrl = document.querySelector('#dishImageUrl').value.trim();
      const ingredients = parseIngredientsInput(document.querySelector('#dishIngredients').value.trim());
      const availableDates = document.querySelector('#dishDates').value.trim()
        ? document.querySelector('#dishDates').value.split(',').map((item) => item.trim()).filter(Boolean)
        : getNextDays(7).map((item) => item.value);
      const availableSlots = [];

      if (document.querySelector('#slotLunch').checked) {
        availableSlots.push('lunch');
      }
      if (document.querySelector('#slotDinner').checked) {
        availableSlots.push('dinner');
      }

      if (!name || Number.isNaN(price)) {
        window.alert('请填写完整的菜名和价格');
        return;
      }
      if (!availableSlots.length) {
        window.alert('至少选择一个可点时段');
        return;
      }

      const nextDish = {
        id: state.editingDishId || uid('dish'),
        name,
        price,
        description,
        coverUrl: coverUrl || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
        availableDates,
        availableSlots,
        enabled: document.querySelector('#dishEnabled').checked,
        ingredients,
        tags: state.editingDishId
          ? (state.data.dishes.find((item) => item.id === state.editingDishId).tags || ['自定义'])
          : ['自定义']
      };

      const exists = state.data.dishes.some((item) => item.id === nextDish.id);
      state.data.dishes = exists
        ? state.data.dishes.map((item) => item.id === nextDish.id ? nextDish : item)
        : [nextDish].concat(state.data.dishes);
      state.editingDishId = '';
      persist();
      renderAll();
    });
  }

  const cancelDishEdit = document.querySelector('#cancelDishEdit');
  if (cancelDishEdit) {
    cancelDishEdit.addEventListener('click', () => {
      state.editingDishId = '';
      renderAdmin();
    });
  }

  document.querySelectorAll('[data-edit-dish]').forEach((button) => {
    button.addEventListener('click', () => {
      state.editingDishId = button.dataset.editDish;
      renderAdmin();
    });
  });

  const saveSlotButton = document.querySelector('#saveSlotButton');
  if (saveSlotButton) {
    saveSlotButton.addEventListener('click', () => {
      const id = document.querySelector('#slotId').value.trim();
      const label = document.querySelector('#slotLabel').value.trim();
      const enabled = document.querySelector('#slotEnabled').checked;

      if (!id || !label) {
        window.alert('请填写完整的时段编码和名称');
        return;
      }

      const nextSlot = { id, label, enabled };
      const exists = state.data.slots.some((item) => item.id === state.editingSlotId || item.id === id);
      state.data.slots = exists
        ? state.data.slots.map((item) => item.id === state.editingSlotId || item.id === id ? nextSlot : item)
        : state.data.slots.concat(nextSlot);
      state.editingSlotId = '';
      persist();
      renderAll();
    });
  }

  const cancelSlotEdit = document.querySelector('#cancelSlotEdit');
  if (cancelSlotEdit) {
    cancelSlotEdit.addEventListener('click', () => {
      state.editingSlotId = '';
      renderAdmin();
    });
  }

  document.querySelectorAll('[data-edit-slot]').forEach((button) => {
    button.addEventListener('click', () => {
      state.editingSlotId = button.dataset.editSlot;
      renderAdmin();
    });
  });

  document.querySelectorAll('[data-order-id][data-status]').forEach((button) => {
    button.addEventListener('click', () => {
      const orderId = button.dataset.orderId;
      const status = button.dataset.status;
      state.data.orders = state.data.orders.map((item) => item.id === orderId ? { ...item, status } : item);
      persist();
      renderAll();
    });
  });

  const copyPurchaseSummaryButton = document.querySelector('#copyPurchaseSummary');
  if (copyPurchaseSummaryButton) {
    copyPurchaseSummaryButton.addEventListener('click', async () => {
      const summary = buildPurchaseSummary(state.data.orders, state.data.dishes, state.data.purchaseChecks);
      const text = buildPurchaseSummaryText(summary);
      if (!text) {
        window.alert('还没有已确认订单可供复制');
        return;
      }

      const copied = await copyText(text);
      window.alert(copied ? '采购清单已复制，可以直接发给自己。' : `请手动复制下面内容：\n\n${text}`);
    });
  }

  const openPrintPurchaseSummaryButton = document.querySelector('#openPrintPurchaseSummary');
  if (openPrintPurchaseSummaryButton) {
    openPrintPurchaseSummaryButton.addEventListener('click', () => {
      const summary = buildPurchaseSummary(state.data.orders, state.data.dishes, state.data.purchaseChecks);
      if (!summary.length) {
        window.alert('还没有已确认订单可供打印');
        return;
      }
      openPrintWindow(summary);
    });
  }

  const openPrintWeeklySummaryButton = document.querySelector('#openPrintWeeklySummary');
  if (openPrintWeeklySummaryButton) {
    openPrintWeeklySummaryButton.addEventListener('click', () => {
      const summary = buildWeeklyMenuSummary(state.data.orders, state.data.dishes, state.data.purchaseChecks);
      if (!summary.length) {
        window.alert('未来 7 天还没有已确认订单可供打印');
        return;
      }
      openWeeklyPrintWindow(summary);
    });
  }

  document.querySelectorAll('[data-purchase-check]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const key = checkbox.dataset.purchaseCheck;
      state.data.purchaseChecks[key] = checkbox.checked;
      persist();
      renderAdmin();
    });
  });
}

function syncVisibleView() {
  const loggedIn = Boolean(state.currentUser);
  const visibleView = loggedIn ? state.currentView : 'login';
  toggleView(elements.loginView, visibleView === 'login');
  toggleView(elements.dashboardView, visibleView === 'dashboard');
  toggleView(elements.menuView, visibleView === 'menu' && state.currentUser && state.currentUser.role !== 'admin');
  toggleView(elements.ordersView, visibleView === 'orders' && state.currentUser && state.currentUser.role !== 'admin');
  toggleView(elements.adminView, visibleView === 'admin' && state.currentUser && state.currentUser.role === 'admin');
}

function openOrderDialog(dish) {
  if (!dish) {
    return;
  }

  const slot = state.data.slots.find((item) => item.id === state.selectedSlot);
  elements.orderDialogBody.innerHTML = `
    <div class="section-head">
      <div>
        <h2 class="section-title">确认订单</h2>
        <p class="section-subtitle">${escapeHtml(dish.name)} / ${escapeHtml(state.selectedDate)} / ${slot ? escapeHtml(slot.label) : ''}</p>
      </div>
    </div>
    <label>
      <div class="hint">数量</div>
      <input id="orderQty" class="field" type="number" min="1" value="1" />
    </label>
    <label>
      <div class="hint">备注</div>
      <textarea id="orderNote" class="textarea" placeholder="比如少辣、不要香菜"></textarea>
    </label>
    <div class="button-row">
      <button id="submitOrderButton" class="primary-button" type="button">提交订单</button>
      <button class="secondary-button" type="submit">取消</button>
    </div>
  `;

  elements.orderDialog.showModal();
  document.querySelector('#submitOrderButton').addEventListener('click', () => {
    const quantity = Math.max(1, Number(document.querySelector('#orderQty').value) || 1);
    const note = document.querySelector('#orderNote').value.trim();
    const nextOrder = {
      id: uid('order'),
      userId: state.currentUser.id,
      userName: state.currentUser.nickname,
      dishId: dish.id,
      dishName: dish.name,
      date: state.selectedDate,
      slotId: state.selectedSlot,
      slotLabel: slot ? slot.label : '',
      quantity,
      note,
      status: 'pending',
      createdAt: formatDateTime(new Date())
    };
    state.data.orders.unshift(nextOrder);
    persist();
    elements.orderDialog.close();
    state.currentView = 'orders';
    renderAll();
  });
}

function getOrdersForCurrentUser() {
  if (!state.currentUser) {
    return [];
  }
  return state.data.orders.filter((item) => item.userId === state.currentUser.id);
}

function toggleView(element, show) {
  element.classList.toggle('hidden', !show);
  element.classList.toggle('active', show);
}

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return normalizeData(clone(seedData));
  }
  try {
    return normalizeData(Object.assign(clone(seedData), JSON.parse(raw)));
  } catch (error) {
    return normalizeData(clone(seedData));
  }
}

function persist() {
  persistLocalState();
  if (hasBackendApi() && state.data.remoteConfig.enabled) {
    syncToBackend({ quiet: true });
  } else if (hasRemoteSyncEnabled()) {
    syncToRemote({ quiet: true });
  }
}

function persistLocalState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function getNextDays(count) {
  const list = [];
  const now = new Date();
  for (let index = 0; index < count; index += 1) {
    const current = new Date(now);
    current.setDate(now.getDate() + index);
    list.push({
      value: formatDate(current),
      label: index === 0 ? '今天' : index === 1 ? '明天' : `第 ${index + 1} 天`
    });
  }
  return list;
}

function formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function formatDateTime(date) {
  return `${formatDate(date)} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeData(data) {
  const nextData = clone(data);
  nextData.users = clone(seedData.users);
  nextData.purchaseChecks = nextData.purchaseChecks || {};
  nextData.favoriteDishIds = Array.isArray(nextData.favoriteDishIds) ? nextData.favoriteDishIds : [];
  nextData.remoteConfig = normalizeRemoteConfig(nextData.remoteConfig);
  const existingDishes = (nextData.dishes || []).map((dish) => {
    const seedDish = builtinHomeDishes.find((item) => item.id === dish.id);
    return {
      ...dish,
      source: dish.source || 'local',
      sourceCategory: dish.sourceCategory || '',
      ingredients: Array.isArray(dish.ingredients) && dish.ingredients.length
        ? dish.ingredients
        : seedDish && Array.isArray(seedDish.ingredients)
          ? clone(seedDish.ingredients)
          : []
    };
  });
  const existingIds = new Set(existingDishes.map((dish) => dish.id));
  const existingNames = new Set(existingDishes.map((dish) => dish.name));
  const missingBuiltins = builtinHomeDishes.filter((dish) => !existingIds.has(dish.id) && !existingNames.has(dish.name));
  nextData.dishes = existingDishes.concat(clone(missingBuiltins));
  return nextData;
}

function normalizeRemoteConfig(remoteConfig) {
  const bootstrapConfig = getBootstrapRemoteConfig();
  return {
    enabled: Boolean((remoteConfig && remoteConfig.enabled) || bootstrapConfig.enabled),
    databaseUrl: (bootstrapConfig.databaseUrl || (remoteConfig && remoteConfig.databaseUrl) || '').trim(),
    roomKey: (bootstrapConfig.roomKey || (remoteConfig && remoteConfig.roomKey) || 'family-menu').trim()
  };
}

function getBootstrapRemoteConfig() {
  const params = new URLSearchParams(window.location.search);
  return {
    enabled: Boolean(params.get('db') || params.get('room')),
    databaseUrl: decodeURIComponent(params.get('db') || ''),
    roomKey: decodeURIComponent(params.get('room') || 'family-menu')
  };
}

function applyBootstrapRemoteConfig() {
  state.data.remoteConfig = normalizeRemoteConfig(state.data.remoteConfig);
  persistLocalState();
  setSyncMeta(hasRemoteSyncEnabled() ? 'ready' : 'idle', hasRemoteSyncEnabled() ? '共享模式已启用，正在准备同步' : '当前为本地模式');
}

function updateRemoteConfigFromForm() {
  const roomKeyField = document.querySelector('#remoteRoomKey');
  const remoteEnabledField = document.querySelector('#remoteEnabled');
  if (!roomKeyField || !remoteEnabledField) {
    return;
  }
  const databaseUrlField = document.querySelector('#remoteDatabaseUrl');

  state.data.remoteConfig = normalizeRemoteConfig({
    enabled: remoteEnabledField.checked,
    databaseUrl: databaseUrlField ? databaseUrlField.value.trim() : (state.data.remoteConfig.databaseUrl || ''),
    roomKey: roomKeyField.value.trim()
  });
  persistLocalState();
}

function hasRemoteSyncEnabled() {
  const config = state.data.remoteConfig || {};
  return Boolean(config.enabled && config.databaseUrl && config.roomKey);
}

function hasBackendApi() {
  return Boolean(state.backendMeta && state.backendMeta.available);
}

function buildRemoteStateUrl(config) {
  const databaseUrl = String(config.databaseUrl || '').replace(/\/$/, '');
  const roomKey = sanitizeRoomKey(config.roomKey || 'family-menu');
  return `${databaseUrl}/${roomKey}.json`;
}

function buildBackendStateUrl(config) {
  const roomKey = sanitizeRoomKey((config && config.roomKey) || 'family-menu');
  return `/api/state?room=${encodeURIComponent(roomKey)}`;
}

function sanitizeRoomKey(roomKey) {
  return String(roomKey || 'family-menu').replace(/[.#$\[\]\s/]+/g, '-');
}

function buildShareLink(config) {
  const url = new URL(window.location.href);
  if (hasBackendApi()) {
    url.searchParams.delete('db');
  } else {
    url.searchParams.set('db', config.databaseUrl);
  }
  url.searchParams.set('room', sanitizeRoomKey(config.roomKey));
  return url.toString();
}

async function probeBackendApi() {
  if (!/^https?:$/i.test(window.location.protocol)) {
    return false;
  }
  try {
    const response = await fetch('/api/health', { method: 'GET', cache: 'no-store' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function syncFromBackend(options = {}) {
  if (!hasBackendApi() || !state.data.remoteConfig.enabled) {
    return;
  }

  try {
    setSyncMeta('syncing', '正在从 SQLite 后端拉取最新数据');
    const response = await fetch(buildBackendStateUrl(state.data.remoteConfig), { method: 'GET', cache: 'no-store' });
    if (!response.ok) {
      throw new Error('后端读取失败');
    }
    const payload = await response.json();
    if (payload.state && typeof payload.state === 'object') {
      const previousSnapshot = JSON.stringify(state.data);
      state.data = normalizeData({ ...payload.state, remoteConfig: state.data.remoteConfig });
      persistLocalState();
      setSyncMeta('success', `已连接 SQLite 后端，房间 ${sanitizeRoomKey(state.data.remoteConfig.roomKey)}`);
      if (previousSnapshot !== JSON.stringify(state.data)) {
        renderAll();
      }
      return;
    }

    if (options.seedIfEmpty) {
      await syncToBackend({ quiet: true });
      setSyncMeta('success', 'SQLite 后端已初始化，当前内容已写入 main.db');
    } else {
      setSyncMeta('success', 'SQLite 后端当前还没有数据');
    }
  } catch (error) {
    setSyncMeta('error', `SQLite 后端同步失败：${error.message}`);
    if (!options.quiet) {
      window.alert(`SQLite 后端同步失败：${error.message}`);
    }
  }
}

async function syncToBackend(options = {}) {
  if (!hasBackendApi() || !state.data.remoteConfig.enabled) {
    return;
  }

  try {
    setSyncMeta('syncing', '正在把本地数据写入 SQLite 后端');
    const response = await fetch(buildBackendStateUrl(state.data.remoteConfig), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.data)
    });
    if (!response.ok) {
      throw new Error('后端写入失败');
    }
    setSyncMeta('success', 'SQLite 后端同步成功，可以把当前链接发给你老婆');
  } catch (error) {
    setSyncMeta('error', `SQLite 后端写入失败：${error.message}`);
    if (options.showAlertOnError) {
      window.alert(`SQLite 后端写入失败：${error.message}`);
    }
  }
}

async function syncFromRemote(options = {}) {
  if (!hasRemoteSyncEnabled()) {
    return;
  }

  try {
    setSyncMeta('syncing', '正在从云端拉取最新数据');
    const response = await fetch(buildRemoteStateUrl(state.data.remoteConfig), { method: 'GET' });
    if (!response.ok) {
      throw new Error('云端读取失败');
    }
    const remoteData = await response.json();
    if (remoteData && typeof remoteData === 'object') {
      const previousSnapshot = JSON.stringify(state.data);
      state.data = normalizeData({ ...remoteData, remoteConfig: state.data.remoteConfig });
      persistLocalState();
      setSyncMeta('success', '已连接共享数据，当前看到的是云端最新内容');
      if (previousSnapshot !== JSON.stringify(state.data)) {
        renderAll();
      }
      return;
    }

    if (options.seedIfEmpty) {
      await syncToRemote({ quiet: true });
      setSyncMeta('success', '已创建共享数据空间，当前内容已推到云端');
    } else {
      setSyncMeta('success', '云端暂时没有数据');
    }
  } catch (error) {
    setSyncMeta('error', `云端同步失败：${error.message}`);
    if (!options.quiet) {
      window.alert(`云端同步失败：${error.message}`);
    }
  }
}

async function syncToRemote(options = {}) {
  if (!hasRemoteSyncEnabled()) {
    return;
  }

  try {
    setSyncMeta('syncing', '正在把本地数据同步到云端');
    const response = await fetch(buildRemoteStateUrl(state.data.remoteConfig), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.data)
    });
    if (!response.ok) {
      throw new Error('云端写入失败');
    }
    setSyncMeta('success', '云端同步成功，可以把分享链接发给你老婆');
  } catch (error) {
    setSyncMeta('error', `云端写入失败：${error.message}`);
    if (options.showAlertOnError) {
      window.alert(`云端写入失败：${error.message}`);
    }
  }
}

function startRemotePolling() {
  stopRemotePolling();
  if (hasBackendApi() && state.data.remoteConfig.enabled) {
    state.remoteSyncTimer = window.setInterval(() => {
      syncFromBackend({ quiet: true });
    }, REMOTE_SYNC_INTERVAL);
    return;
  }
  if (!hasRemoteSyncEnabled()) {
    return;
  }
  state.remoteSyncTimer = window.setInterval(() => {
    syncFromRemote({ quiet: true });
  }, REMOTE_SYNC_INTERVAL);
}

function stopRemotePolling() {
  if (state.remoteSyncTimer) {
    window.clearInterval(state.remoteSyncTimer);
    state.remoteSyncTimer = null;
  }
}

function setSyncMeta(status, message) {
  state.syncMeta = { status, message };
}

function parseIngredientsInput(input) {
  if (!input) {
    return [];
  }

  return input.split(',').map((part) => part.trim()).filter(Boolean).map((part) => {
    const pieces = part.split(':');
    if (pieces.length === 1) {
      return { name: pieces[0].trim(), amount: '1份' };
    }
    return {
      name: pieces[0].trim(),
      amount: pieces.slice(1).join(':').trim() || '1份'
    };
  }).filter((item) => item.name);
}

function formatIngredientsInput(ingredients) {
  return (ingredients || []).map((item) => `${item.name}:${item.amount}`).join(', ');
}

function formatIngredientsText(ingredients) {
  if (!ingredients || !ingredients.length) {
    return '未设置';
  }
  return ingredients.map((item) => `${item.name} ${item.amount}`).join('，');
}

function buildPurchaseSummary(orders, dishes, purchaseChecks) {
  const confirmedOrders = (orders || []).filter((item) => item.status === 'confirmed');
  const slotMap = new Map();

  confirmedOrders.forEach((order) => {
    const dish = dishes.find((item) => item.id === order.dishId);
    const ingredients = dish && Array.isArray(dish.ingredients) ? dish.ingredients : [];
    const groupKey = `${order.date}__${order.slotId}`;
    const dateEntry = slotMap.get(groupKey) || {
      date: order.date,
      slotId: order.slotId,
      slotLabel: order.slotLabel,
      orderCount: 0,
      ingredientMap: new Map()
    };
    dateEntry.orderCount += order.quantity;

    ingredients.forEach((ingredient) => {
      const parsed = parseAmountValue(ingredient.amount);
      const key = `${ingredient.name}__${parsed.unit}`;
      const current = dateEntry.ingredientMap.get(key) || {
        name: ingredient.name,
        unit: parsed.unit,
        value: 0,
        rawTotals: [],
        orderCount: 0
      };

      if (parsed.isNumeric) {
        current.value += parsed.value * order.quantity;
      } else {
        current.rawTotals.push(`${ingredient.amount} x ${order.quantity}`);
      }
      current.orderCount += order.quantity;
      dateEntry.ingredientMap.set(key, current);
    });

    slotMap.set(groupKey, dateEntry);
  });

  return Array.from(slotMap.values())
    .sort((left, right) => {
      const dateCompare = left.date.localeCompare(right.date);
      if (dateCompare !== 0) {
        return dateCompare;
      }
      return left.slotLabel.localeCompare(right.slotLabel);
    })
    .map((entry) => ({
      date: entry.date,
      slotId: entry.slotId,
      slotLabel: entry.slotLabel,
      orderCount: entry.orderCount,
      items: Array.from(entry.ingredientMap.values()).map((item) => ({
        name: item.name,
        total: item.unit || item.value ? formatAmount(item) : item.rawTotals.join('，'),
        orderCount: item.orderCount,
        checkKey: `${entry.date}__${entry.slotId}__${item.name}__${item.unit}`,
        checked: Boolean(purchaseChecks && purchaseChecks[`${entry.date}__${entry.slotId}__${item.name}__${item.unit}`])
      }))
    }));
}

function buildPurchaseSummaryText(groups) {
  if (!groups.length) {
    return '';
  }

  return groups.map((group) => {
    const lines = [
      `${group.date} ${group.slotLabel}`,
      ...group.items.map((item) => `- [${item.checked ? 'x' : ' '}] ${item.name}：${item.total}`)
    ];
    return lines.join('\n');
  }).join('\n\n');
}

function openPrintWindow(groups) {
  const printWindow = window.open('', '_blank', 'width=900,height=1000');
  if (!printWindow) {
    window.alert('浏览器拦截了新窗口，请允许弹窗后再试。');
    return;
  }

  const html = buildPrintablePurchaseHtml(groups);
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
}

function buildPrintablePurchaseHtml(groups) {
  const createdAt = formatDateTime(new Date());
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>打印版购物清单</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      color: #2b211b;
      background: #ffffff;
    }
    .page {
      max-width: 840px;
      margin: 0 auto;
      padding: 32px 28px 48px;
    }
    .header {
      border-bottom: 2px solid #2b211b;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    .title {
      margin: 0;
      font-size: 30px;
    }
    .meta {
      margin-top: 8px;
      color: #5f5147;
      font-size: 14px;
    }
    .group {
      margin-bottom: 24px;
      page-break-inside: avoid;
      border: 1px solid #d9d0c8;
      border-radius: 12px;
      overflow: hidden;
    }
    .group-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding: 14px 16px;
      background: #f6efe9;
      border-bottom: 1px solid #d9d0c8;
    }
    .group-title {
      margin: 0;
      font-size: 20px;
    }
    .group-subtitle {
      margin-top: 4px;
      color: #5f5147;
      font-size: 14px;
    }
    .group-count {
      white-space: nowrap;
      font-size: 14px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #ece4dc;
      font-size: 14px;
    }
    th {
      background: #fbf8f5;
    }
    tr:last-child td {
      border-bottom: none;
    }
    .check-cell {
      width: 76px;
      text-align: center;
    }
    .check-box {
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 1.5px solid #2b211b;
      line-height: 16px;
      text-align: center;
      font-size: 13px;
      font-weight: 700;
    }
    .footer {
      margin-top: 28px;
      color: #6b5c50;
      font-size: 13px;
    }
    .actions {
      margin-bottom: 20px;
    }
    .print-button {
      border: none;
      border-radius: 999px;
      background: #2b211b;
      color: #fff;
      padding: 10px 18px;
      cursor: pointer;
    }
    @media print {
      .actions { display: none; }
      .page { max-width: none; padding: 0; }
      body { padding: 16mm; }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="actions">
      <button class="print-button" onclick="window.print()">打印或另存为 PDF</button>
    </div>
    <div class="header">
      <h1 class="title">家庭购物清单</h1>
      <div class="meta">生成时间：${escapeHtml(createdAt)}</div>
      <div class="meta">说明：按日期和时段分组，已买项会保留勾选状态。</div>
    </div>
    ${groups.map((group) => `
      <section class="group">
        <div class="group-head">
          <div>
            <h2 class="group-title">${escapeHtml(group.date)}</h2>
            <div class="group-subtitle">${escapeHtml(group.slotLabel)}</div>
          </div>
          <div class="group-count">${group.orderCount} 份已确认订单</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>采购项</th>
              <th>数量</th>
              <th class="check-cell">已买</th>
            </tr>
          </thead>
          <tbody>
            ${group.items.map((item) => `
              <tr>
                <td>${escapeHtml(item.name)}</td>
                <td>${escapeHtml(item.total)}</td>
                <td class="check-cell"><span class="check-box">${item.checked ? 'x' : ''}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>
    `).join('')}
    <div class="footer">打印后可直接拿去买菜，或在浏览器里另存为 PDF。</div>
  </div>
</body>
</html>`;
}

function buildWeeklyMenuSummary(orders, dishes, purchaseChecks) {
  const purchaseGroups = buildPurchaseSummary(orders, dishes, purchaseChecks);
  const upcomingDates = new Set(getNextDays(7).map((item) => item.value));
  const confirmedOrders = (orders || []).filter((item) => item.status === 'confirmed' && upcomingDates.has(item.date));
  const weeklyMap = new Map();

  confirmedOrders.forEach((order) => {
    const dateEntry = weeklyMap.get(order.date) || {
      date: order.date,
      slots: []
    };

    let slotEntry = dateEntry.slots.find((item) => item.slotId === order.slotId);
    if (!slotEntry) {
      const purchaseGroup = purchaseGroups.find((item) => item.date === order.date && item.slotId === order.slotId);
      slotEntry = {
        slotId: order.slotId,
        slotLabel: order.slotLabel,
        orders: [],
        items: purchaseGroup ? purchaseGroup.items : []
      };
      dateEntry.slots.push(slotEntry);
    }

    slotEntry.orders.push({
      dishName: order.dishName,
      quantity: order.quantity
    });

    weeklyMap.set(order.date, dateEntry);
  });

  return Array.from(weeklyMap.values())
    .sort((left, right) => left.date.localeCompare(right.date))
    .map((entry) => ({
      date: entry.date,
      slots: entry.slots,
      totalOrders: entry.slots.reduce((sum, slot) => sum + slot.orders.reduce((slotSum, order) => slotSum + order.quantity, 0), 0),
      totalItems: entry.slots.reduce((sum, slot) => sum + slot.items.length, 0)
    }));
}

function openWeeklyPrintWindow(summary) {
  const printWindow = window.open('', '_blank', 'width=980,height=1100');
  if (!printWindow) {
    window.alert('浏览器拦截了新窗口，请允许弹窗后再试。');
    return;
  }

  const html = buildPrintableWeeklyHtml(summary);
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
}

function buildPrintableWeeklyHtml(summary) {
  const createdAt = formatDateTime(new Date());
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>打印版本周菜单汇总</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      color: #2b211b;
      background: #ffffff;
    }
    .page {
      max-width: 920px;
      margin: 0 auto;
      padding: 32px 28px 48px;
    }
    .actions { margin-bottom: 20px; }
    .print-button {
      border: none;
      border-radius: 999px;
      background: #2b211b;
      color: #fff;
      padding: 10px 18px;
      cursor: pointer;
    }
    .header {
      border-bottom: 2px solid #2b211b;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    .title { margin: 0; font-size: 30px; }
    .meta { margin-top: 8px; color: #5f5147; font-size: 14px; }
    .day-card {
      border: 1px solid #d9d0c8;
      border-radius: 12px;
      margin-bottom: 20px;
      overflow: hidden;
      page-break-inside: avoid;
    }
    .day-head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding: 14px 16px;
      background: #f6efe9;
      border-bottom: 1px solid #d9d0c8;
    }
    .day-title { margin: 0; font-size: 20px; }
    .slot-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      padding: 16px;
    }
    .slot-card {
      border: 1px solid #e7ded5;
      border-radius: 10px;
      padding: 14px;
    }
    .slot-head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: center;
    }
    .menus,
    .items {
      margin-top: 10px;
      color: #5f5147;
      font-size: 14px;
      line-height: 1.7;
    }
    .items ul {
      margin: 8px 0 0;
      padding-left: 18px;
    }
    .items li { margin-bottom: 4px; }
    .footer { margin-top: 24px; color: #6b5c50; font-size: 13px; }
    @media print {
      .actions { display: none; }
      .page { max-width: none; padding: 0; }
      body { padding: 14mm; }
      .slot-grid { grid-template-columns: 1fr 1fr; }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="actions">
      <button class="print-button" onclick="window.print()">打印或另存为 PDF</button>
    </div>
    <div class="header">
      <h1 class="title">本周菜单汇总</h1>
      <div class="meta">生成时间：${escapeHtml(createdAt)}</div>
      <div class="meta">范围：未来 7 天已确认订单，按日期和时段整理。</div>
    </div>
    ${summary.map((day) => `
      <section class="day-card">
        <div class="day-head">
          <div>
            <h2 class="day-title">${escapeHtml(day.date)}</h2>
            <div class="meta">${day.totalOrders} 份已确认订单 / ${day.totalItems} 项采购</div>
          </div>
        </div>
        <div class="slot-grid">
          ${day.slots.map((slot) => `
            <div class="slot-card">
              <div class="slot-head">
                <strong>${escapeHtml(slot.slotLabel)}</strong>
                <span>${slot.orders.length} 道菜</span>
              </div>
              <div class="menus">菜单：${escapeHtml(slot.orders.map((order) => `${order.dishName} x${order.quantity}`).join('，'))}</div>
              <div class="items">
                采购项：
                <ul>
                  ${slot.items.map((item) => `<li>${escapeHtml(item.name)} - ${escapeHtml(item.total)}${item.checked ? '（已买）' : ''}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `).join('')}
    <div class="footer">适合直接打印，也适合另存为 PDF 发给家里人。</div>
  </div>
</body>
</html>`;
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', 'readonly');
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(textArea);
    return copied;
  } catch (error) {
    return false;
  }
}

function parseAmountValue(amountText) {
  const text = String(amountText || '').trim();
  const match = text.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { isNumeric: false, value: 0, unit: '', raw: text };
  }
  return {
    isNumeric: true,
    value: Number(match[1]),
    unit: match[2].trim(),
    raw: text
  };
}

function formatAmount(item) {
  if (item.rawTotals.length && !item.value) {
    return item.rawTotals.join('，');
  }
  const numeric = Number.isInteger(item.value) ? String(item.value) : item.value.toFixed(2);
  return `${numeric}${item.unit}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, '&#96;');
}

function toggleFavoriteDish(dishId) {
  const favorites = new Set(state.data.favoriteDishIds || []);
  if (favorites.has(dishId)) {
    favorites.delete(dishId);
  } else {
    favorites.add(dishId);
  }
  state.data.favoriteDishIds = Array.from(favorites);
  persist();
}

function getRecommendedDishes(dishes, favoriteDishIds, selectedDate, selectedSlot) {
  if (!favoriteDishIds || !favoriteDishIds.length) {
    return [];
  }

  const favoriteSet = new Set(favoriteDishIds);
  const favoriteDishes = dishes.filter((dish) => favoriteSet.has(dish.id));
  const likedTags = new Set(favoriteDishes.flatMap((dish) => dish.tags || []));
  const likedCategories = new Set(favoriteDishes.map((dish) => dish.sourceCategory).filter(Boolean));

  return dishes
    .filter((dish) => !favoriteSet.has(dish.id)
      && dish.enabled
      && dish.availableDates.includes(selectedDate)
      && dish.availableSlots.includes(selectedSlot))
    .map((dish) => ({
      ...dish,
      recommendationScore: scoreDishRecommendation(dish, likedTags, likedCategories)
    }))
    .filter((dish) => dish.recommendationScore > 0)
    .sort((left, right) => right.recommendationScore - left.recommendationScore)
    .slice(0, 4);
}

function scoreDishRecommendation(dish, likedTags, likedCategories) {
  let score = 0;
  (dish.tags || []).forEach((tag) => {
    if (likedTags.has(tag)) {
      score += 2;
    }
  });
  if (dish.sourceCategory && likedCategories.has(dish.sourceCategory)) {
    score += 3;
  }
  return score;
}

async function importPublicRecipes() {
  let dishesToImport = [];

  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    if (!response.ok) {
      throw new Error('公开菜谱接口请求失败');
    }
    const data = await response.json();
    dishesToImport = Array.isArray(data.meals) ? data.meals.map(mapMealDbToDish).filter(Boolean) : [];
  } catch (error) {
    dishesToImport = clone(publicRecipeFallback);
  }

  if (!dishesToImport.length) {
    dishesToImport = clone(publicRecipeFallback);
  }

  let importedCount = 0;
  const existingNames = new Set(state.data.dishes.map((item) => item.name));
  dishesToImport.forEach((dish) => {
    if (existingNames.has(dish.name)) {
      return;
    }
    state.data.dishes.push(dish);
    existingNames.add(dish.name);
    importedCount += 1;
  });

  persist();
  return importedCount;
}

function mapMealDbToDish(meal) {
  if (!meal || !meal.strMeal) {
    return null;
  }

  const ingredients = extractMealDbIngredients(meal);
  return {
    id: `themealdb-${meal.idMeal}`,
    name: meal.strMeal,
    price: estimateDishPrice(ingredients.length),
    description: meal.strInstructions ? meal.strInstructions.slice(0, 80) : '公开菜谱导入',
    coverUrl: meal.strMealThumb || publicRecipeFallback[0].coverUrl,
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: ['lunch', 'dinner'],
    enabled: true,
    tags: ['导入', meal.strCategory || '家常', meal.strArea || '国际'].filter(Boolean),
    source: 'themealdb',
    sourceCategory: meal.strCategory || meal.strArea || '公开菜谱',
    ingredients: ingredients.length ? ingredients : [{ name: '待补充食材', amount: '1份' }]
  };
}

function extractMealDbIngredients(meal) {
  const ingredients = [];
  for (let index = 1; index <= 20; index += 1) {
    const name = meal[`strIngredient${index}`];
    const amount = meal[`strMeasure${index}`];
    if (name && String(name).trim()) {
      ingredients.push({
        name: String(name).trim(),
        amount: String(amount || '适量').trim() || '适量'
      });
    }
  }
  return ingredients.slice(0, 8);
}

function estimateDishPrice(ingredientCount) {
  return 18 + ingredientCount * 4;
}

function parseBulkRecipeText(sourceText) {
  const blocks = sourceText
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map(parseRecipeBlock).filter(Boolean);
}

function parseRecipeBlock(block) {
  if (block.includes('|')) {
    return parsePipeRecipeBlock(block);
  }

  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
  if (!lines.length) {
    return null;
  }

  const name = cleanupRecipeName(lines[0]);
  if (!name) {
    return null;
  }

  let description = '';
  let ingredients = [];
  let tags = ['自定义'];
  let availableSlots = ['lunch', 'dinner'];

  lines.slice(1).forEach((line, index) => {
    if (/^(食材|材料|配料)[:：]/i.test(line)) {
      ingredients = parseIngredientsInput(line.replace(/^(食材|材料|配料)[:：]/i, '').trim());
      return;
    }
    if (/^(标签|口味|分类)[:：]/i.test(line)) {
      tags = splitTags(line.replace(/^(标签|口味|分类)[:：]/i, '').trim());
      return;
    }
    if (/^(时段|供应时段)[:：]/i.test(line)) {
      availableSlots = parseSlotsText(line.replace(/^(时段|供应时段)[:：]/i, '').trim());
      return;
    }
    if (!description && index === 0) {
      description = line;
    }
  });

  if (!ingredients.length) {
    ingredients = guessIngredientsFromBlock(lines.slice(1));
  }

  return buildImportedDish({
    name,
    description,
    ingredients,
    tags,
    availableSlots,
    sourceCategory: '网页粘贴'
  });
}

function parsePipeRecipeBlock(block) {
  const parts = block.split('|').map((item) => item.trim());
  const name = cleanupRecipeName(parts[0]);
  if (!name) {
    return null;
  }

  return buildImportedDish({
    name,
    description: parts[1] || '从网页粘贴导入',
    ingredients: parseIngredientsInput(parts[2] || ''),
    tags: splitTags(parts[3] || '自定义'),
    availableSlots: parseSlotsText(parts[4] || '午餐,晚餐'),
    sourceCategory: '网页粘贴'
  });
}

function buildImportedDish({ name, description, ingredients, tags, availableSlots, sourceCategory }) {
  return {
    id: uid('paste-dish'),
    name,
    price: estimateDishPrice(Math.max(ingredients.length, 2)),
    description: description || '从网页粘贴导入',
    coverUrl: publicRecipeFallback[0].coverUrl,
    availableDates: getNextDays(7).map((item) => item.value),
    availableSlots: availableSlots.length ? availableSlots : ['lunch', 'dinner'],
    enabled: true,
    tags: tags.length ? tags : ['自定义'],
    source: 'pasted',
    sourceCategory: sourceCategory || '网页粘贴',
    ingredients: ingredients.length ? ingredients : [{ name: '待补充食材', amount: '适量' }]
  };
}

function mergeImportedDishes(recipes) {
  let imported = 0;
  const existingNames = new Set(state.data.dishes.map((item) => item.name));
  recipes.forEach((dish) => {
    if (!existingNames.has(dish.name)) {
      state.data.dishes.unshift(dish);
      existingNames.add(dish.name);
      imported += 1;
    }
  });
  return imported;
}

function cleanupRecipeName(text) {
  return String(text || '')
    .replace(/^(菜名|名称)[:：]/, '')
    .replace(/^\d+[.、]\s*/, '')
    .trim();
}

function splitTags(text) {
  return String(text || '')
    .split(/[，,、]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseSlotsText(text) {
  const source = String(text || '').toLowerCase();
  const slots = [];
  if (source.includes('午') || source.includes('lunch')) {
    slots.push('lunch');
  }
  if (source.includes('晚') || source.includes('dinner')) {
    slots.push('dinner');
  }
  return slots.length ? slots : ['lunch', 'dinner'];
}

function guessIngredientsFromBlock(lines) {
  const text = lines.join(' ');
  if (!text) {
    return [];
  }

  return text
    .split(/[，,、；;]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 1)
    .slice(0, 8)
    .map((item) => {
      const pieces = item.split(/[:：]/);
      if (pieces.length > 1) {
        return {
          name: pieces[0].trim(),
          amount: pieces.slice(1).join(':').trim() || '适量'
        };
      }
      return {
        name: item,
        amount: '适量'
      };
    });
}