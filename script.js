(function () {
  "use strict";

  const STORAGE_KEY = "nexotech-os-state-v1";

  const seedState = {
    theme: "light",
    products: [
      { id: "p1", nome: "SSD Kingston NV2 500GB", categoria: "Armazenamento", sku: "ARM-001", qtd: 32, min: 8, preco: 279.9, fornecedor: "Tech Sul" },
      { id: "p2", nome: "Memória DDR4 8GB 3200MHz", categoria: "Memória RAM", sku: "MEM-008", qtd: 48, min: 10, preco: 169.9, fornecedor: "Alpha Parts" },
      { id: "p3", nome: "Controle DualSense Branco", categoria: "Acessórios Gamer", sku: "GAM-014", qtd: 6, min: 8, preco: 429.9, fornecedor: "GamePro" },
      { id: "p4", nome: "Fonte ATX 650W 80 Plus", categoria: "Cabos e Conectores", sku: "CAB-022", qtd: 12, min: 5, preco: 349.9, fornecedor: "Energia Max" },
      { id: "p5", nome: "Placa de Vídeo RTX 4060 8GB", categoria: "Placas de Vídeo", sku: "GPU-406", qtd: 3, min: 4, preco: 2199.9, fornecedor: "Distribuidora Alpha" },
      { id: "p6", nome: "Processador Ryzen 5 5600", categoria: "Processadores", sku: "CPU-560", qtd: 9, min: 4, preco: 799.9, fornecedor: "ChipHouse" },
      { id: "p7", nome: "Mouse Logitech G203", categoria: "Periféricos", sku: "PER-203", qtd: 0, min: 6, preco: 149.9, fornecedor: "Global Tech" },
      { id: "p8", nome: "Cabo HDMI 2.1 2m", categoria: "Cabos e Conectores", sku: "CAB-021", qtd: 54, min: 12, preco: 39.9, fornecedor: "Conecta Mais" },
      { id: "p9", nome: "Notebook Lenovo IdeaPad i5", categoria: "Notebooks", sku: "NOT-155", qtd: 4, min: 2, preco: 3299.9, fornecedor: "Lenovo Canal" },
      { id: "p10", nome: "Headset HyperX Cloud Stinger", categoria: "Acessórios Gamer", sku: "GAM-031", qtd: 7, min: 7, preco: 259.9, fornecedor: "GamePro" },
      { id: "p11", nome: "SSD SATA 1TB Crucial BX500", categoria: "Armazenamento", sku: "ARM-010", qtd: 18, min: 6, preco: 389.9, fornecedor: "Tech Sul" },
      { id: "p12", nome: "Teclado Mecânico Redragon", categoria: "Periféricos", sku: "PER-707", qtd: 14, min: 5, preco: 229.9, fornecedor: "Global Tech" }
    ],
    clients: [
      { id: "c1", nome: "Mariana Alves", telefone: "(11) 98888-1200", cpf: "123.456.789-10", email: "mariana@email.com", endereco: "Rua das Flores, 42", cidade: "Sao Paulo / SP", desde: "12/03/2024", obs: "Cliente recorrente." },
      { id: "c2", nome: "Joao Pereira", telefone: "(21) 97777-4200", cpf: "987.654.321-00", email: "joao@email.com", endereco: "Av. Central, 150", cidade: "Rio de Janeiro / RJ", desde: "04/08/2024", obs: "" },
      { id: "c3", nome: "Camila Rocha", telefone: "(31) 96666-3300", cpf: "456.789.123-22", email: "camila@email.com", endereco: "Rua Minas, 90", cidade: "Belo Horizonte / MG", desde: "19/01/2025", obs: "Prefere contato por WhatsApp." },
      { id: "c4", nome: "Lucas Martins", telefone: "(41) 95555-9911", cpf: "321.654.987-55", email: "lucas@email.com", endereco: "Rua XV, 780", cidade: "Curitiba / PR", desde: "02/06/2025", obs: "" },
      { id: "c5", nome: "Fernanda Lima", telefone: "(51) 94444-1212", cpf: "111.222.333-44", email: "fernanda@email.com", endereco: "Av. Ipiranga, 300", cidade: "Porto Alegre / RS", desde: "28/11/2025", obs: "" }
    ],
    orders: [
      { id: "o1", numero: "OS-20260720-001", clienteId: "c1", cliente: "Mariana Alves", telefone: "(11) 98888-1200", tipo: "Notebook", marca: "Dell", modelo: "Inspiron 15", serie: "DL-88321", status: "Em análise", prioridade: "Alta", data: "20/07/2026", defeito: "Não liga após queda de energia.", obs: "Testar fonte e placa-mãe.", acessorios: ["Fonte"], tecnico: "Rafael", valor: 420, timeline: [{ titulo: "Ordem aberta", hora: "20/07/2026 09:10" }, { titulo: "Equipamento recebido na bancada", hora: "20/07/2026 09:35" }] },
      { id: "o2", numero: "OS-20260719-014", clienteId: "c2", cliente: "Joao Pereira", telefone: "(21) 97777-4200", tipo: "Videogame", marca: "Sony", modelo: "PlayStation 5", serie: "PS5-5512", status: "Aguardando peça", prioridade: "Normal", data: "19/07/2026", defeito: "Desliga sozinho em jogos.", obs: "Aguardando cooler.", acessorios: ["Controle", "Cabo HDMI"], tecnico: "Bianca", valor: 680, timeline: [{ titulo: "Ordem aberta", hora: "19/07/2026 14:20" }, { titulo: "Diagnóstico inicial concluído", hora: "19/07/2026 17:40" }] },
      { id: "o3", numero: "OS-20260718-009", clienteId: "c3", cliente: "Camila Rocha", telefone: "(31) 96666-3300", tipo: "Computador Desktop", marca: "Montado", modelo: "Ryzen 5", serie: "PC-994", status: "Em reparo", prioridade: "Normal", data: "18/07/2026", defeito: "Tela azul aleatoria.", obs: "Memoria com erro no teste.", acessorios: [], tecnico: "Rafael", valor: 350, timeline: [{ titulo: "Ordem aberta", hora: "18/07/2026 10:10" }, { titulo: "Reparo iniciado", hora: "19/07/2026 08:15" }] },
      { id: "o4", numero: "OS-20260717-006", clienteId: "c4", cliente: "Lucas Martins", telefone: "(41) 95555-9911", tipo: "Monitor", marca: "LG", modelo: "UltraGear 24", serie: "LG-2401", status: "Pronto", prioridade: "Baixa", data: "17/07/2026", defeito: "Sem imagem via HDMI.", obs: "Conector substituido.", acessorios: ["Cabo HDMI"], tecnico: "Diego", valor: 260, timeline: [{ titulo: "Ordem aberta", hora: "17/07/2026 11:00" }, { titulo: "Pronto para retirada", hora: "18/07/2026 16:25" }] },
      { id: "o5", numero: "OS-20260716-011", clienteId: "c5", cliente: "Fernanda Lima", telefone: "(51) 94444-1212", tipo: "Notebook", marca: "Lenovo", modelo: "IdeaPad 3", serie: "LV-3302", status: "Aguardando aprovação", prioridade: "Alta", data: "16/07/2026", defeito: "Carcaça quebrada e dobradiça solta.", obs: "Orçamento enviado.", acessorios: ["Fonte"], tecnico: "Bianca", valor: 590, timeline: [{ titulo: "Ordem aberta", hora: "16/07/2026 13:45" }, { titulo: "Orçamento enviado", hora: "17/07/2026 10:05" }] },
      { id: "o6", numero: "OS-20260715-004", clienteId: "c1", cliente: "Mariana Alves", telefone: "(11) 98888-1200", tipo: "Impressora", marca: "HP", modelo: "LaserJet", serie: "HP-7781", status: "Entregue", prioridade: "Normal", data: "15/07/2026", defeito: "Atolando papel.", obs: "Limpeza e troca do rolete.", acessorios: [], tecnico: "Diego", valor: 180, timeline: [{ titulo: "Ordem aberta", hora: "15/07/2026 09:00" }, { titulo: "Entregue ao cliente", hora: "16/07/2026 15:20" }] },
      { id: "o7", numero: "OS-20260714-018", clienteId: "c2", cliente: "Joao Pereira", telefone: "(21) 97777-4200", tipo: "Videogame", marca: "Microsoft", modelo: "Xbox Series S", serie: "XB-2451", status: "Em análise", prioridade: "Baixa", data: "14/07/2026", defeito: "Controle desconecta.", obs: "Verificar placa bluetooth.", acessorios: ["Controle"], tecnico: "Rafael", valor: 210, timeline: [{ titulo: "Ordem aberta", hora: "14/07/2026 16:10" }] }
    ],
    salesHistory: [2800, 3200, 2600, 4100, 3800, 5200, 4700, 6100, 5400, 5900, 6300, 5750, 6420, 6380],
    sales: [{ date: "2026-07-20", total: 6380 }]
  };

  const pageMeta = {
    dashboard: ["Dashboard", "Visão geral da loja"],
    produtos: ["Produtos", "Cadastro e controle de peças"],
    estoque: ["Estoque", "Disponibilidade e movimentações"],
    clientes: ["Clientes", "Base de clientes atendidos"],
    ordens: ["Ordens de Serviço", "Acompanhamento técnico"],
    vendas: ["Vendas / PDV", "Venda rápida de produtos"],
    relatorios: ["Relatórios", "Indicadores financeiros e operacionais"],
    configuracoes: ["Configurações", "Preferências do sistema"]
  };

  const statusOrder = ["Em análise", "Aguardando aprovação", "Aguardando peça", "Em reparo", "Pronto", "Entregue"];
  const statusLabels = {
    "Em análise": "Em análise",
    "Aguardando aprovação": "Aguard. aprovação",
    "Aguardando peça": "Aguard. peça",
    "Em reparo": "Em reparo",
    Pronto: "Pronto",
    Entregue: "Entregue"
  };
  const statusClasses = {
    "Em análise": "info",
    "Aguardando aprovação": "violet",
    "Aguardando peça": "warning",
    "Em reparo": "warning",
    Pronto: "success",
    Entregue: "neutral"
  };

  const statusAliases = {
    "Em analise": "Em análise",
    "Aguardando aprovacao": "Aguardando aprovação",
    "Aguardando peca": "Aguardando peça"
  };

  const categoryAliases = {
    "Memoria RAM": "Memória RAM",
    "Placas de Video": "Placas de Vídeo",
    Perifericos: "Periféricos",
    "Acessorios Gamer": "Acessórios Gamer"
  };

  const darkVars = {
    "--bg": "#0F172A",
    "--surface": "#111827",
    "--surface-2": "#1F2937",
    "--text": "#E5E7EB",
    "--text-muted": "#A7B0C0",
    "--text-faint": "#768196",
    "--border": "#273244",
    "--border-strong": "#364256",
    "--primary-light": "#172554",
    "--success-bg": "#063B24",
    "--warning-bg": "#432D0B",
    "--danger-bg": "#481B1B",
    "--violet-bg": "#26214E"
  };

  const icons = {
    box: '<svg viewBox="0 0 24 24" fill="none"><path d="M21 8 12 3 3 8l9 5 9-5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M3 8v8l9 5 9-5V8M12 13v8" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="20" r="1.4" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="20" r="1.4" stroke="currentColor" stroke-width="1.8"/><path d="M2.5 3h2.4l2.1 11.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  let state = loadState();
  let cart = [];
  let currentPage = "dashboard";
  let selectedProductId = null;
  let selectedOrderId = null;
  let orderStatusFilter = "";
  let selectedPayment = "Pix";

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    normalizeSavedState();
    bindEvents();
    renderAll();
    applyTheme(state.theme || "light");
    showPage("dashboard");
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved) return clone(seedState);
      return {
        ...clone(seedState),
        ...saved,
        products: Array.isArray(saved.products) ? saved.products : clone(seedState.products),
        clients: Array.isArray(saved.clients) ? saved.clients : clone(seedState.clients),
        orders: Array.isArray(saved.orders) ? saved.orders : clone(seedState.orders),
        salesHistory: Array.isArray(saved.salesHistory) ? saved.salesHistory : clone(seedState.salesHistory),
        sales: Array.isArray(saved.sales) ? saved.sales : clone(seedState.sales)
      };
    } catch (error) {
      console.warn("Nao foi possivel ler dados salvos.", error);
      return clone(seedState);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Nao foi possivel salvar os dados.", error);
    }
  }

  function normalizeSavedState() {
    state.products.forEach((product, index) => {
      product.id = product.id || createId("p");
      product.categoria = categoryAliases[product.categoria] || product.categoria;
      product.min = Number.isFinite(Number(product.min)) ? Number(product.min) : 5;
      product.preco = Number(product.preco) || 0;
      product.qtd = Number(product.qtd) || 0;
      product.sku = product.sku || `SKU-${String(index + 1).padStart(3, "0")}`;
    });
    state.clients.forEach((client) => {
      client.id = client.id || createId("c");
      client.ordens = undefined;
    });
    state.orders.forEach((order) => {
      order.id = order.id || createId("o");
      order.status = statusAliases[order.status] || order.status;
      order.timeline = Array.isArray(order.timeline) ? order.timeline : [{ titulo: "Ordem aberta", hora: `${order.data || todayBR()} 09:00` }];
    });
  }

  function bindEvents() {
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleShortcuts);

    on("global-search", "keydown", handleGlobalSearch);
    on("produtos-search", "input", renderProdutosTable);
    on("produtos-filtro-categoria", "change", renderProdutosTable);
    on("produtos-filtro-status", "change", renderProdutosTable);
    on("estoque-search", "input", renderEstoqueGrid);
    on("estoque-filtro-categoria", "change", renderEstoqueGrid);
    on("clientes-search", "input", renderClientesTable);
    on("ordens-search", "input", renderOrdensGrid);
    on("pdv-search", "input", renderPdvGrid);
    on("pdv-desconto", "input", renderCart);

    on("btn-new-order-top", "click", openNewOrderModal);
    on("btn-nova-ordem", "click", openNewOrderModal);
    on("btn-novo-produto", "click", () => openModal("modal-produto"));
    on("btn-novo-cliente", "click", () => openModal("modal-cliente"));
    on("btn-salvar-produto", "click", saveProductFromForm);
    on("btn-salvar-cliente", "click", saveClientFromForm);
    on("btn-salvar-ordem", "click", saveOrderFromForm);
    on("btn-ver-etiqueta", "click", openEtiquetaFromPreview);
    on("btn-imprimir", "click", printCurrentLabel);
    on("btn-imprimir-etiqueta-detalhe", "click", openEtiquetaFromPreview);
    on("btn-atualizar-status", "click", updateSelectedOrderStatus);
    on("btn-salvar-movimentacao", "click", saveStockMovement);
    on("btn-finalizar-venda", "click", finalizeSale);
    on("btn-notify", "click", () => toast("Voce tem ordens aguardando acompanhamento.", "info"));

    on("os-cliente", "input", syncOrderClientPhone);

    const statusTabs = $("#ordens-status-tabs");
    if (statusTabs) {
      statusTabs.addEventListener("click", (event) => {
        const tab = event.target.closest(".stab");
        if (!tab) return;
        statusTabs.querySelectorAll(".stab").forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
        orderStatusFilter = tab.dataset.status || "";
        renderOrdensGrid();
      });
    }

    const viewToggle = $(".view-toggle");
    if (viewToggle) {
      viewToggle.addEventListener("click", (event) => {
        const button = event.target.closest(".vt-btn");
        if (!button) return;
        viewToggle.querySelectorAll(".vt-btn").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        const grid = $("#estoque-grid");
        if (grid) grid.classList.toggle("list-view", button.dataset.view === "list");
      });
    }

    const payOptions = $("#pdv-pay-options");
    if (payOptions) {
      payOptions.addEventListener("click", (event) => {
        const button = event.target.closest(".pay-opt");
        if (!button) return;
        selectedPayment = button.dataset.pay;
        payOptions.querySelectorAll(".pay-opt").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
      });
    }

    $$(".th-opt").forEach((button) => {
      button.addEventListener("click", () => {
        applyTheme(button.dataset.theme);
        toast(`Tema ${button.textContent.trim()} aplicado.`, "success");
      });
    });

    $$(".settings-card .btn-ghost").forEach((button) => {
      button.addEventListener("click", () => toast("Configuracao demonstrativa nesta versao estatica.", "info"));
    });

    window.addEventListener("resize", debounce(drawAllCharts, 120));
    window.addEventListener("afterprint", () => document.body.classList.remove("printing-label"));
  }

  function handleDocumentClick(event) {
    const overlay = event.target.classList.contains("modal-overlay") ? event.target : null;
    if (overlay) {
      closeModal(overlay.id);
      return;
    }

    const closeButton = event.target.closest("[data-close-modal]");
    if (closeButton) {
      closeAllModals();
      return;
    }

    const pageButton = event.target.closest("[data-page]");
    if (pageButton) {
      showPage(pageButton.dataset.page);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (action) {
      handleAction(action.dataset.action, action.dataset.id);
      return;
    }

    const orderCard = event.target.closest(".ordem-card");
    if (orderCard && orderCard.dataset.id) {
      openOrderDetail(orderCard.dataset.id);
    }
  }

  function handleAction(action, id) {
    if (action === "move-stock") openStockMovement(id);
    if (action === "sell-product") {
      addToCart(id);
      showPage("vendas");
    }
    if (action === "add-cart") addToCart(id);
    if (action === "cart-inc") updateCartQty(id, 1);
    if (action === "cart-dec") updateCartQty(id, -1);
    if (action === "cart-remove") removeFromCart(id);
    if (action === "view-order") openOrderDetail(id);
  }

  function handleShortcuts(event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      const search = $("#global-search");
      if (search) {
        search.focus();
        search.select();
      }
    }
    if (event.key === "Escape") closeAllModals();
  }

  function handleGlobalSearch(event) {
    if (event.key !== "Enter") return;
    const term = event.currentTarget.value.trim().toLowerCase();
    if (!term) return;

    const product = state.products.find((item) => matches(item, term, ["nome", "sku", "categoria"]));
    if (product) {
      showPage("produtos");
      setValue("produtos-search", product.nome);
      renderProdutosTable();
      return;
    }

    const order = state.orders.find((item) => matches(item, term, ["numero", "cliente", "tipo", "marca", "modelo", "status"]));
    if (order) {
      showPage("ordens");
      setValue("ordens-search", order.numero);
      renderOrdensGrid();
      return;
    }

    const client = state.clients.find((item) => matches(item, term, ["nome", "telefone", "cpf", "cidade"]));
    if (client) {
      showPage("clientes");
      setValue("clientes-search", client.nome);
      renderClientesTable();
      return;
    }

    toast("Nenhum resultado encontrado.", "warning");
  }

  function showPage(page) {
    if (!pageMeta[page]) return;
    currentPage = page;

    $$(".page").forEach((section) => section.classList.toggle("active", section.id === `page-${page}`));
    $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.page === page));

    const [title, breadcrumb] = pageMeta[page];
    setText("page-title", title);
    setText("page-breadcrumb", breadcrumb);

    if (page === "relatorios" || page === "dashboard") {
      requestAnimationFrame(drawAllCharts);
    }
  }

  function renderAll() {
    renderFilters();
    renderClientOptions();
    renderKpis();
    renderProdutosTable();
    renderEstoqueGrid();
    renderClientesTable();
    renderOrdensGrid();
    renderDashboard();
    renderPdvGrid();
    renderCart();
    renderReports();
    requestAnimationFrame(drawAllCharts);
  }

  function renderFilters() {
    const categories = [...new Set(state.products.map((product) => product.categoria))].sort();
    fillSelect("produtos-filtro-categoria", categories, "Todas categorias");
    fillSelect("estoque-filtro-categoria", categories, "Todas categorias");
  }

  function renderClientOptions() {
    const datalist = $("#lista-clientes-os");
    if (datalist) {
      datalist.innerHTML = state.clients.map((client) => `<option value="${escapeHTML(client.nome)}"></option>`).join("");
    }

    const select = $("#pdv-cliente");
    if (select) {
      select.innerHTML = '<option value="">Cliente balcao</option>' + state.clients.map((client) => `<option value="${escapeHTML(client.id)}">${escapeHTML(client.nome)}</option>`).join("");
    }
  }

  function renderKpis() {
    const totalValue = state.products.reduce((sum, product) => sum + product.qtd * product.preco, 0);
    const totalQty = state.products.reduce((sum, product) => sum + product.qtd, 0);
    const critical = state.products.filter((product) => productStatus(product).key !== "ok").length;
    const openOrders = state.orders.filter((order) => order.status !== "Entregue").length;
    const doneOrders = state.orders.filter((order) => order.status === "Pronto" || order.status === "Entregue").length;
    const todaySales = state.sales.reduce((sum, sale) => sum + Number(sale.total || 0), 0);

    setText("kpi-estoque", formatCurrency(totalValue));
    setText("kpi-produtos", state.products.length);
    setText("kpi-abertas", openOrders);
    setText("kpi-finalizadas", doneOrders);
    setText("kpi-clientes", state.clients.length);
    setText("kpi-faturamento", formatCurrency(todaySales));

    setText("prod-kpi-qtd", totalQty.toLocaleString("pt-BR"));
    setText("prod-kpi-valor", formatCurrency(totalValue));
    setText("prod-kpi-criticos", critical);
    setText("prod-kpi-categorias", new Set(state.products.map((product) => product.categoria)).size);
    setText("nav-os-count", openOrders);
  }

  function renderProdutosTable() {
    const tbody = $("#table-produtos tbody");
    if (!tbody) return;
    const term = getValue("produtos-search").toLowerCase();
    const category = getValue("produtos-filtro-categoria");
    const status = getValue("produtos-filtro-status");
    const products = state.products.filter((product) => {
      const found = !term || matches(product, term, ["nome", "categoria", "sku", "fornecedor"]);
      const categoryMatch = !category || product.categoria === category;
      const statusMatch = !status || productStatus(product).key === status;
      return found && categoryMatch && statusMatch;
    });

    tbody.innerHTML = products.map((product) => {
      const statusInfo = productStatus(product);
      return `<tr>
        <td><div class="cell-primary">${escapeHTML(product.nome)}</div><div class="cell-muted">${escapeHTML(product.categoria)}</div></td>
        <td>${escapeHTML(product.categoria)}</td>
        <td class="cell-mono">${escapeHTML(product.sku)}</td>
        <td><strong>${product.qtd}</strong></td>
        <td>${formatCurrency(product.preco)}</td>
        <td>${escapeHTML(product.fornecedor || "-")}</td>
        <td><span class="badge ${statusInfo.className}">${statusInfo.label}</span></td>
        <td>
          <div class="row-actions">
            <button class="icon-btn" title="Movimentar estoque" data-action="move-stock" data-id="${product.id}">${icons.box}</button>
            <button class="icon-btn" title="Adicionar ao carrinho" data-action="sell-product" data-id="${product.id}">${icons.cart}</button>
          </div>
        </td>
      </tr>`;
    }).join("") || emptyRow(8, "Nenhum produto encontrado.");
  }

  function renderEstoqueGrid() {
    const grid = $("#estoque-grid");
    if (!grid) return;
    const term = getValue("estoque-search").toLowerCase();
    const category = getValue("estoque-filtro-categoria");
    const products = state.products.filter((product) => {
      const found = !term || matches(product, term, ["nome", "categoria", "sku", "fornecedor"]);
      const categoryMatch = !category || product.categoria === category;
      return found && categoryMatch;
    });

    grid.innerHTML = products.map((product) => {
      const statusInfo = productStatus(product);
      return `<article class="estoque-card">
        <div class="estoque-thumb">
          ${productIcon()}
          <span class="badge ${statusInfo.className}">${statusInfo.label}</span>
        </div>
        <div class="estoque-body">
          <span class="estoque-cat">${escapeHTML(product.categoria)}</span>
          <h3 class="estoque-name">${escapeHTML(product.nome)}</h3>
          <div class="estoque-meta"><span>Quantidade</span><span class="estoque-qtd">${product.qtd} un.</span></div>
          <div class="estoque-meta"><span>Minimo</span><span>${product.min} un.</span></div>
          <div class="estoque-price">${formatCurrency(product.preco)}</div>
          <div class="estoque-fornecedor">${escapeHTML(product.fornecedor || "Sem fornecedor")}</div>
          <div class="estoque-actions">
            <button class="btn btn-ghost btn-sm" data-action="move-stock" data-id="${product.id}">${icons.box} Estoque</button>
            <button class="btn btn-primary btn-sm" data-action="sell-product" data-id="${product.id}">${icons.cart} Vender</button>
          </div>
        </div>
      </article>`;
    }).join("") || `<div class="panel"><p class="cell-muted">Nenhum item encontrado.</p></div>`;
  }

  function renderClientesTable() {
    const tbody = $("#table-clientes tbody");
    if (!tbody) return;
    const term = getValue("clientes-search").toLowerCase();
    const clients = state.clients.filter((client) => !term || matches(client, term, ["nome", "telefone", "cpf", "cidade", "email"]));

    tbody.innerHTML = clients.map((client) => {
      const count = state.orders.filter((order) => order.clienteId === client.id || order.cliente === client.nome).length;
      return `<tr>
        <td><div class="cell-primary">${escapeHTML(client.nome)}</div><div class="cell-muted">${escapeHTML(client.email || "-")}</div></td>
        <td>${escapeHTML(client.telefone || "-")}</td>
        <td>${escapeHTML(client.cpf || "-")}</td>
        <td>${escapeHTML(client.cidade || "-")}</td>
        <td><span class="pill">${count}</span></td>
        <td>${escapeHTML(client.desde || todayBR())}</td>
        <td><div class="row-actions"><button class="icon-btn" title="Nova ordem" data-page="ordens">${icons.plus}</button></div></td>
      </tr>`;
    }).join("") || emptyRow(7, "Nenhum cliente encontrado.");
  }

  function renderOrdensGrid() {
    const grid = $("#ordens-grid");
    if (!grid) return;
    const term = getValue("ordens-search").toLowerCase();
    const orders = state.orders.filter((order) => {
      const found = !term || matches(order, term, ["numero", "cliente", "tipo", "marca", "modelo", "status", "prioridade"]);
      const statusMatch = !orderStatusFilter || order.status === orderStatusFilter;
      return found && statusMatch;
    });

    grid.innerHTML = orders.map((order) => {
      const statusClass = statusClasses[order.status] || "neutral";
      const priorityClass = normalizeClass(order.prioridade);
      return `<article class="ordem-card prio-${priorityClass}" data-id="${order.id}">
        <div class="ordem-top">
          <div>
            <div class="ordem-numero">${escapeHTML(order.numero)}</div>
            <div class="ordem-equip">${escapeHTML(order.tipo)} ${escapeHTML(order.modelo || "")}</div>
            <div class="ordem-marca">${escapeHTML(order.marca || "-")}</div>
          </div>
          <span class="badge ${statusClass}">${escapeHTML(statusLabels[order.status] || order.status)}</span>
        </div>
        <div class="ordem-cliente"><span class="ordem-avatar">${initials(order.cliente)}</span>${escapeHTML(order.cliente)}</div>
        <div><span class="prio ${priorityClass}">${escapeHTML(order.prioridade)}</span></div>
        <div class="ordem-bottom">
          <span class="ordem-date">${escapeHTML(order.data)}</span>
          ${qrSvg(order.numero, "ordem-qr")}
        </div>
      </article>`;
    }).join("") || `<div class="panel"><p class="cell-muted">Nenhuma ordem encontrada.</p></div>`;
  }

  function renderDashboard() {
    const alerts = $("#alert-list");
    if (alerts) {
      const products = state.products.filter((product) => productStatus(product).key !== "ok").slice(0, 5);
      alerts.innerHTML = products.map((product) => {
        const status = productStatus(product);
        const dot = status.key === "zerado" ? "red" : "yellow";
        return `<div class="alert-item">
          <span class="alert-dot ${dot}"></span>
          <span class="alert-text"><b>${escapeHTML(product.nome)}</b> esta com ${product.qtd} unidade(s) em estoque.</span>
          <button class="link-btn" data-action="move-stock" data-id="${product.id}">Ajustar</button>
        </div>`;
      }).join("") || `<div class="alert-item"><span class="alert-dot green"></span><span class="alert-text">Estoque sem alertas criticos.</span></div>`;
    }

    const tbody = $("#table-ultimas-ordens tbody");
    if (tbody) {
      tbody.innerHTML = state.orders.slice(0, 7).map((order) => `<tr>
        <td class="cell-mono">${escapeHTML(order.numero)}</td>
        <td>${escapeHTML(order.tipo)} ${escapeHTML(order.modelo || "")}</td>
        <td>${escapeHTML(order.cliente)}</td>
        <td><span class="prio ${normalizeClass(order.prioridade)}">${escapeHTML(order.prioridade)}</span></td>
        <td><span class="badge ${statusClasses[order.status] || "neutral"}">${escapeHTML(statusLabels[order.status] || order.status)}</span></td>
        <td>${escapeHTML(order.data)}</td>
      </tr>`).join("");
    }
  }

  function renderPdvGrid() {
    const grid = $("#pdv-grid");
    if (!grid) return;
    const term = getValue("pdv-search").toLowerCase();
    const products = state.products.filter((product) => product.qtd > 0 && (!term || matches(product, term, ["nome", "sku", "categoria"])));

    grid.innerHTML = products.map((product) => `<article class="pdv-item" data-action="add-cart" data-id="${product.id}">
      <div class="pdv-item-thumb">${productIcon()}</div>
      <div class="pdv-item-name">${escapeHTML(product.nome)}</div>
      <div class="pdv-item-stock">${product.qtd} em estoque</div>
      <div class="pdv-item-bottom">
        <span class="pdv-item-price">${formatCurrency(product.preco)}</span>
        <button class="pdv-add-btn" title="Adicionar ao carrinho">${icons.plus}</button>
      </div>
    </article>`).join("") || `<div class="panel"><p class="cell-muted">Nenhum produto disponivel para venda.</p></div>`;
  }

  function renderCart() {
    const list = $("#pdv-cart-items");
    if (!list) return;

    if (!cart.length) {
      list.innerHTML = '<div class="pdv-empty">Nenhum item adicionado ainda.<br>Selecione produtos ao lado.</div>';
    } else {
      list.innerHTML = cart.map((item) => {
        const product = getProduct(item.id);
        if (!product) return "";
        return `<div class="pdv-cart-item">
          <span class="pdv-ci-name">${escapeHTML(product.nome)}</span>
          <div class="pdv-ci-qty">
            <button class="pdv-qty-btn" data-action="cart-dec" data-id="${product.id}">-</button>
            <strong>${item.qty}</strong>
            <button class="pdv-qty-btn" data-action="cart-inc" data-id="${product.id}">+</button>
          </div>
          <span class="pdv-ci-price">${formatCurrency(product.preco * item.qty)}</span>
          <button class="pdv-ci-remove" title="Remover" data-action="cart-remove" data-id="${product.id}">${icons.trash}</button>
        </div>`;
      }).join("");
    }

    const totals = cartTotals();
    setText("pdv-cart-count", `${cart.reduce((sum, item) => sum + item.qty, 0)} itens`);
    setText("pdv-subtotal", formatCurrency(totals.subtotal));
    setText("pdv-total", formatCurrency(totals.total));
  }

  function renderReports() {
    const tbody = $("#table-mais-vendidos tbody");
    if (!tbody) return;
    const rows = state.products
      .map((product) => ({ ...product, vendidos: Math.max(2, Math.round((product.min + 12) - Math.min(product.qtd, product.min + 12))) }))
      .sort((a, b) => b.vendidos - a.vendidos)
      .slice(0, 7);

    tbody.innerHTML = rows.map((product) => `<tr>
      <td><div class="cell-primary">${escapeHTML(product.nome)}</div><div class="cell-muted">${escapeHTML(product.sku)}</div></td>
      <td>${escapeHTML(product.categoria)}</td>
      <td>${product.vendidos}</td>
      <td>${formatCurrency(product.vendidos * product.preco)}</td>
      <td><span class="pill">${product.qtd} restante(s)</span></td>
    </tr>`).join("");
  }

  function saveProductFromForm() {
    const form = $("#form-produto");
    if (!form || !form.checkValidity()) {
      if (form) form.reportValidity();
      return;
    }

    const category = getValue("prod-categoria");
    const product = {
      id: createId("p"),
      nome: getValue("prod-nome"),
      categoria: category,
      sku: getValue("prod-sku") || generateSku(category),
      qtd: Number(getValue("prod-qtd")) || 0,
      min: 5,
      preco: Number(getValue("prod-preco")) || 0,
      fornecedor: getValue("prod-fornecedor") || "Sem fornecedor"
    };

    state.products.unshift(product);
    form.reset();
    saveState();
    renderAll();
    closeModal("modal-produto");
    toast("Produto cadastrado com sucesso.", "success");
  }

  function saveClientFromForm() {
    const form = $("#form-cliente");
    if (!form || !form.checkValidity()) {
      if (form) form.reportValidity();
      return;
    }

    const client = {
      id: createId("c"),
      nome: getValue("cli-nome"),
      telefone: getValue("cli-telefone"),
      cpf: getValue("cli-cpf") || "-",
      email: getValue("cli-email") || "-",
      endereco: getValue("cli-endereco") || "-",
      cidade: getValue("cli-cidade") || "-",
      desde: todayBR(),
      obs: getValue("cli-obs")
    };

    state.clients.unshift(client);
    form.reset();
    saveState();
    renderAll();
    closeModal("modal-cliente");
    toast("Cliente cadastrado com sucesso.", "success");
  }

  function openNewOrderModal() {
    const form = $("#form-ordem");
    if (form) form.reset();
    setText("os-preview-numero", makeOrderNumber());
    renderClientOptions();
    openModal("modal-ordem");
  }

  function saveOrderFromForm() {
    const form = $("#form-ordem");
    if (!form || !form.checkValidity()) {
      if (form) form.reportValidity();
      return;
    }

    let client = state.clients.find((item) => item.nome.toLowerCase() === getValue("os-cliente").toLowerCase());
    if (!client) {
      client = {
        id: createId("c"),
        nome: getValue("os-cliente"),
        telefone: getValue("os-telefone") || "-",
        cpf: "-",
        email: "-",
        endereco: "-",
        cidade: "-",
        desde: todayBR(),
        obs: ""
      };
      state.clients.unshift(client);
    }

    const order = {
      id: createId("o"),
      numero: makeOrderNumber(),
      clienteId: client.id,
      cliente: client.nome,
      telefone: getValue("os-telefone") || client.telefone || "-",
      tipo: getValue("os-tipo"),
      marca: getValue("os-marca") || "-",
      modelo: getValue("os-modelo") || "-",
      serie: getValue("os-serie") || "-",
      status: getValue("os-status"),
      prioridade: getValue("os-prioridade"),
      data: todayBR(),
      defeito: getValue("os-defeito"),
      obs: getValue("os-obs"),
      acessorios: $$("#form-ordem .checkbox input:checked").map((input) => input.value),
      tecnico: "Rafael",
      valor: 0,
      timeline: [{ titulo: "Ordem aberta", hora: nowBR() }]
    };

    state.orders.unshift(order);
    selectedOrderId = order.id;
    saveState();
    renderAll();
    renderOrderCardPreview(order);
    closeModal("modal-ordem");
    openModal("modal-card-ordem");
    toast("Ordem criada com sucesso.", "success");
  }

  function syncOrderClientPhone() {
    const client = state.clients.find((item) => item.nome.toLowerCase() === getValue("os-cliente").toLowerCase());
    if (client && !getValue("os-telefone")) setValue("os-telefone", client.telefone);
  }

  function openOrderDetail(orderId) {
    const order = getOrder(orderId);
    if (!order) return;
    selectedOrderId = order.id;

    setText("det-numero", order.numero);
    setText("det-sub", `Aberta em ${order.data}`);
    setValue("det-novo-status", order.status);

    const details = $("#detalhe-grid");
    if (details) {
      details.innerHTML = [
        ["Cliente", order.cliente],
        ["Telefone", order.telefone],
        ["Equipamento", `${order.tipo} ${order.marca} ${order.modelo}`],
        ["Serie", order.serie || "-"],
        ["Prioridade", order.prioridade],
        ["Status", order.status],
        ["Defeito", order.defeito],
        ["Observacoes", order.obs || "-"]
      ].map(([label, value]) => `<div class="det-item"><span>${escapeHTML(label)}</span><span>${escapeHTML(value)}</span></div>`).join("");
    }

    const timeline = $("#detalhe-timeline");
    if (timeline) {
      timeline.innerHTML = order.timeline.map((item) => `<div class="tl-item">
        <span class="tl-dot"></span>
        <div class="tl-content"><span class="tl-title">${escapeHTML(item.titulo)}</span><span class="tl-time">${escapeHTML(item.hora)}</span></div>
      </div>`).join("");
    }

    openModal("modal-detalhe-ordem");
  }

  function updateSelectedOrderStatus() {
    const order = getOrder(selectedOrderId);
    if (!order) return;
    const status = getValue("det-novo-status");
    if (!status || status === order.status) {
      toast("Escolha um status diferente para atualizar.", "warning");
      return;
    }

    order.status = status;
    order.timeline.push({ titulo: `Status alterado para ${status}`, hora: nowBR() });
    saveState();
    renderAll();
    openOrderDetail(order.id);
    toast("Status atualizado.", "success");
  }

  function renderOrderCardPreview(order) {
    const preview = $("#os-card-preview");
    if (!preview) return;
    preview.innerHTML = `<div class="oscp-top">
      <div>
        <div class="oscp-numero">${escapeHTML(order.numero)}</div>
        <div class="oscp-equip">${escapeHTML(order.tipo)} ${escapeHTML(order.modelo)}</div>
      </div>
      ${qrSvg(order.numero, "oscp-qr")}
    </div>
    <div class="oscp-row"><span>Cliente</span><span>${escapeHTML(order.cliente)}</span></div>
    <div class="oscp-row"><span>Status</span><span>${escapeHTML(order.status)}</span></div>
    <div class="oscp-row"><span>Prioridade</span><span>${escapeHTML(order.prioridade)}</span></div>
    <div class="oscp-row"><span>Entrada</span><span>${escapeHTML(order.data)}</span></div>`;
  }

  function openEtiquetaFromPreview() {
    const order = getOrder(selectedOrderId);
    if (!order) return;
    renderEtiqueta(order);
    closeModal("modal-card-ordem");
    closeModal("modal-detalhe-ordem");
    openModal("modal-etiqueta");
  }

  function renderEtiqueta(order) {
    const etiqueta = $("#etiqueta-preview");
    if (etiqueta) {
      etiqueta.innerHTML = `<div class="label-head">
        <div>
          <span>NexoTech OS</span>
          <strong>${escapeHTML(order.numero)}</strong>
        </div>
        <b>${escapeHTML(order.prioridade)}</b>
      </div>
      <div class="label-info">
        <div><span>Cliente</span><strong>${escapeHTML(order.cliente)}</strong></div>
        <div><span>Entrada</span><strong>${escapeHTML(order.data)}</strong></div>
        <div class="wide"><span>Equipamento</span><strong>${escapeHTML(order.tipo)} ${escapeHTML(order.marca)} ${escapeHTML(order.modelo)}</strong></div>
        <div><span>Status</span><strong>${escapeHTML(order.status)}</strong></div>
        <div><span>Tecnico</span><strong>${escapeHTML(order.tecnico || "Equipe")}</strong></div>
      </div>
      <div class="label-barcode">${barcodeSvg(order.numero)}</div>
      <div class="label-code">${escapeHTML(order.numero)}</div>`;
    }
  }

  function printCurrentLabel() {
    const order = getOrder(selectedOrderId);
    if (!order) {
      toast("Abra uma OS antes de imprimir a etiqueta.", "warning");
      return;
    }
    renderEtiqueta(order);
    document.body.classList.add("printing-label");
    toast("Etiqueta enviada para impressao.", "info");
    window.print();
    window.setTimeout(() => document.body.classList.remove("printing-label"), 600);
  }

  function openStockMovement(productId) {
    const product = getProduct(productId);
    if (!product) return;
    selectedProductId = product.id;
    const formInfo = $("#mov-produto-info");
    if (formInfo) {
      formInfo.innerHTML = `<div class="estoque-thumb">${productIcon()}</div>
      <div>
        <div class="cell-primary">${escapeHTML(product.nome)}</div>
        <div class="cell-muted">${product.qtd} unidade(s) disponiveis</div>
      </div>`;
    }
    setValue("mov-qtd", "1");
    setValue("mov-motivo", "");
    setValue("mov-tipo", "entrada");
    openModal("modal-movimentacao");
  }

  function saveStockMovement() {
    const product = getProduct(selectedProductId);
    if (!product) return;
    const qty = Math.max(1, Number(getValue("mov-qtd")) || 1);
    const type = getValue("mov-tipo");
    if (type === "saida" && qty > product.qtd) {
      toast("Quantidade maior que o estoque disponivel.", "warning");
      return;
    }

    product.qtd += type === "entrada" ? qty : -qty;
    saveState();
    renderAll();
    closeModal("modal-movimentacao");
    toast("Estoque atualizado.", "success");
  }

  function addToCart(productId) {
    const product = getProduct(productId);
    if (!product || product.qtd <= 0) {
      toast("Produto sem estoque.", "warning");
      return;
    }
    const item = cart.find((entry) => entry.id === productId);
    if (item) {
      if (item.qty >= product.qtd) {
        toast("Quantidade maxima em estoque ja esta no carrinho.", "warning");
        return;
      }
      item.qty += 1;
    } else {
      cart.push({ id: productId, qty: 1 });
    }
    renderCart();
    toast("Produto adicionado ao carrinho.", "success");
  }

  function updateCartQty(productId, delta) {
    const item = cart.find((entry) => entry.id === productId);
    const product = getProduct(productId);
    if (!item || !product) return;
    const nextQty = item.qty + delta;
    if (nextQty <= 0) {
      removeFromCart(productId);
      return;
    }
    if (nextQty > product.qtd) {
      toast("Quantidade maxima em estoque atingida.", "warning");
      return;
    }
    item.qty = nextQty;
    renderCart();
  }

  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    renderCart();
  }

  function finalizeSale() {
    if (!cart.length) {
      toast("Adicione produtos ao carrinho antes de finalizar.", "warning");
      return;
    }

    const unavailable = cart.find((item) => {
      const product = getProduct(item.id);
      return !product || product.qtd < item.qty;
    });
    if (unavailable) {
      toast("Um item do carrinho nao tem estoque suficiente.", "warning");
      return;
    }

    const totals = cartTotals();
    cart.forEach((item) => {
      const product = getProduct(item.id);
      product.qtd -= item.qty;
    });

    state.sales.push({
      date: todayISO(),
      total: totals.total,
      payment: selectedPayment,
      clientId: getValue("pdv-cliente") || null,
      items: cart.map((item) => ({ ...item }))
    });
    state.salesHistory[state.salesHistory.length - 1] += totals.total;
    cart = [];
    saveState();
    renderAll();
    toast(`Venda finalizada em ${selectedPayment}.`, "success");
  }

  function drawAllCharts() {
    drawLineChart("chart-vendas", state.salesHistory, "#2563EB");
    drawDonutChart("chart-ordens", statusOrder.map((status) => ({
      label: statusLabels[status] || status,
      value: state.orders.filter((order) => order.status === status).length,
      color: statusColor(status)
    })), "legend-ordens");

    const categoryStock = groupedByCategory().slice(0, 6);
    drawBarChart("chart-estoque", categoryStock.map((item) => item.label), categoryStock.map((item) => item.value), "#7C6EF6", "legend-estoque");

    drawLineChart("chart-receita", monthlyRevenue(), "#22C55E");
    drawDonutChart("chart-rel-status", statusOrder.map((status) => ({
      label: statusLabels[status] || status,
      value: state.orders.filter((order) => order.status === status).length,
      color: statusColor(status)
    })), "legend-rel-status");
    drawBarChart("chart-tecnicos", ["Rafael", "Bianca", "Diego"], [
      state.orders.filter((order) => order.tecnico === "Rafael").length,
      state.orders.filter((order) => order.tecnico === "Bianca").length,
      state.orders.filter((order) => order.tecnico === "Diego").length
    ], "#F59E0B");
  }

  function drawLineChart(canvasId, values, color) {
    const setup = setupCanvas(canvasId);
    if (!setup) return;
    const { ctx, width, height } = setup;
    const padding = 28;
    const max = Math.max(...values, 1);
    const min = Math.min(...values, 0);
    const range = Math.max(max - min, 1);
    const points = values.map((value, index) => {
      const x = padding + (index / Math.max(values.length - 1, 1)) * (width - padding * 2);
      const y = height - padding - ((value - min) / range) * (height - padding * 2);
      return [x, y];
    });

    clearChart(ctx, width, height);
    drawGrid(ctx, width, height, padding);

    ctx.beginPath();
    points.forEach(([x, y], index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();

    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
    gradient.addColorStop(0, `${color}33`);
    gradient.addColorStop(1, `${color}00`);
    ctx.lineTo(width - padding, height - padding);
    ctx.lineTo(padding, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    points.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = getCss("--surface");
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }

  function drawDonutChart(canvasId, items, legendId) {
    const setup = setupCanvas(canvasId);
    if (!setup) return;
    const { ctx, width, height } = setup;
    clearChart(ctx, width, height);

    const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
    const radius = Math.min(width, height) / 2 - 16;
    const centerX = width / 2;
    const centerY = height / 2;
    let start = -Math.PI / 2;

    items.forEach((item) => {
      const angle = (item.value / total) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, start, start + angle);
      ctx.strokeStyle = item.color;
      ctx.lineWidth = 24;
      ctx.lineCap = "round";
      ctx.stroke();
      start += angle;
    });

    ctx.fillStyle = getCss("--text");
    ctx.font = "700 18px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(total), centerX, centerY - 4);
    ctx.fillStyle = getCss("--text-muted");
    ctx.font = "600 11px Inter, sans-serif";
    ctx.fillText("ordens", centerX, centerY + 15);

    const legend = legendId ? $(`#${legendId}`) : null;
    if (legend) {
      legend.innerHTML = items.filter((item) => item.value > 0).map((item) => `<span class="legend-item"><span class="legend-dot" style="background:${item.color}"></span>${escapeHTML(item.label)} (${item.value})</span>`).join("");
    }
  }

  function drawBarChart(canvasId, labels, values, color, legendId) {
    const setup = setupCanvas(canvasId);
    if (!setup) return;
    const { ctx, width, height } = setup;
    const padding = 28;
    const max = Math.max(...values, 1);
    const barWidth = Math.max(18, (width - padding * 2) / values.length - 14);

    clearChart(ctx, width, height);
    drawGrid(ctx, width, height, padding);

    values.forEach((value, index) => {
      const x = padding + index * ((width - padding * 2) / values.length) + 7;
      const barHeight = ((height - padding * 2) * value) / max;
      const y = height - padding - barHeight;
      roundedRect(ctx, x, y, barWidth, barHeight, 8, color);
      ctx.fillStyle = getCss("--text-muted");
      ctx.font = "600 10px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(shortLabel(labels[index]), x + barWidth / 2, height - 8);
    });

    const legend = legendId ? $(`#${legendId}`) : null;
    if (legend) {
      legend.innerHTML = labels.map((label, index) => `<span class="legend-item"><span class="legend-dot" style="background:${color}"></span>${escapeHTML(label)} (${values[index]})</span>`).join("");
    }
  }

  function setupCanvas(canvasId) {
    const canvas = $(`#${canvasId}`);
    if (!canvas || !canvas.closest(".page.active")) return null;
    const parentWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 320;
    const width = Math.max(260, parentWidth);
    const height = Number(canvas.getAttribute("height")) || 200;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = "100%";
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { canvas, ctx, width, height };
  }

  function clearChart(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
  }

  function drawGrid(ctx, width, height, padding) {
    ctx.strokeStyle = getCss("--border");
    ctx.lineWidth = 1;
    for (let i = 0; i < 4; i += 1) {
      const y = padding + ((height - padding * 2) / 3) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }
  }

  function roundedRect(ctx, x, y, width, height, radius, color) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function applyTheme(mode) {
    const chosen = mode === "auto" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : mode;
    Object.keys(darkVars).forEach((key) => document.documentElement.style.removeProperty(key));
    if (chosen === "dark") {
      Object.entries(darkVars).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
    }
    state.theme = mode;
    saveState();
    $$(".th-opt").forEach((button) => button.classList.toggle("active", button.dataset.theme === mode));
    requestAnimationFrame(drawAllCharts);
  }

  function openModal(id) {
    const modal = $(`#${id}`);
    if (modal) modal.classList.add("open");
  }

  function closeModal(id) {
    const modal = $(`#${id}`);
    if (modal) modal.classList.remove("open");
  }

  function closeAllModals() {
    $$(".modal-overlay").forEach((modal) => modal.classList.remove("open"));
  }

  function toast(message, type = "success") {
    const container = $("#toast-container");
    if (!container) return;
    const toastEl = document.createElement("div");
    toastEl.className = `toast ${type}`;
    toastEl.innerHTML = `<span class="toast-icon">${type === "warning" ? "!" : "OK"}</span><span class="toast-text">${escapeHTML(message)}</span>`;
    container.appendChild(toastEl);
    window.setTimeout(() => {
      toastEl.classList.add("out");
      window.setTimeout(() => toastEl.remove(), 260);
    }, 2600);
  }

  function productStatus(product) {
    if (product.qtd <= 0) return { key: "zerado", label: "Sem estoque", className: "danger" };
    if (product.qtd <= product.min) return { key: "baixo", label: "Estoque baixo", className: "warning" };
    return { key: "ok", label: "Em estoque", className: "success" };
  }

  function getProduct(id) {
    return state.products.find((product) => product.id === id);
  }

  function getOrder(id) {
    return state.orders.find((order) => order.id === id);
  }

  function cartTotals() {
    const subtotal = cart.reduce((sum, item) => {
      const product = getProduct(item.id);
      return sum + (product ? product.preco * item.qty : 0);
    }, 0);
    const discount = clamp(Number(getValue("pdv-desconto")) || 0, 0, 100);
    return {
      subtotal,
      discount,
      total: subtotal * (1 - discount / 100)
    };
  }

  function groupedByCategory() {
    const map = new Map();
    state.products.forEach((product) => {
      map.set(product.categoria, (map.get(product.categoria) || 0) + product.qtd);
    });
    return [...map.entries()].map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value);
  }

  function monthlyRevenue() {
    const base = [12400, 15100, 13900, 17200, 18600, 21400];
    const extra = state.sales.reduce((sum, sale) => sum + Number(sale.total || 0), 0);
    base[base.length - 1] += Math.round(extra / 3);
    return base;
  }

  function fillSelect(id, values, firstLabel) {
    const select = $(`#${id}`);
    if (!select) return;
    const current = select.value;
    select.innerHTML = `<option value="">${firstLabel}</option>` + values.map((value) => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join("");
    if (values.includes(current)) select.value = current;
  }

  function matches(item, term, keys) {
    const normalizedTerm = cleanText(term);
    return keys.some((key) => cleanText(item[key]).includes(normalizedTerm));
  }

  function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value == null ? "" : String(value);
    return div.innerHTML;
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(value) || 0);
  }

  function createId(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return `${prefix}-${window.crypto.randomUUID()}`;
    }
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function generateSku(category) {
    const prefix = normalizeClass(category).slice(0, 3).toUpperCase() || "SKU";
    return `${prefix}-${String(state.products.length + 1).padStart(3, "0")}`;
  }

  function makeOrderNumber() {
    const date = todayISO().replaceAll("-", "");
    const count = state.orders.filter((order) => order.numero.includes(date)).length + 1;
    return `OS-${date}-${String(count).padStart(3, "0")}`;
  }

  function todayISO() {
    return new Date().toISOString().slice(0, 10);
  }

  function todayBR() {
    return new Intl.DateTimeFormat("pt-BR").format(new Date());
  }

  function nowBR() {
    return `${todayBR()} ${new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date())}`;
  }

  function normalizeClass(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function initials(name) {
    return String(name || "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  function productIcon() {
    return '<svg viewBox="0 0 24 24" fill="none"><path d="M21 8 12 3 3 8l9 5 9-5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M3 8v8l9 5 9-5V8M12 13v8" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  }

  function qrSvg(value, className) {
    const cells = [];
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
    for (let y = 0; y < 7; y += 1) {
      for (let x = 0; x < 7; x += 1) {
        const finder = (x < 2 && y < 2) || (x > 4 && y < 2) || (x < 2 && y > 4);
        const filled = finder || ((hash >> ((x + y * 7) % 24)) & 1);
        if (filled) cells.push(`<rect x="${x * 3}" y="${y * 3}" width="2.4" height="2.4" rx=".4"/>`);
      }
    }
    return `<svg class="${className || ""}" viewBox="0 0 21 21" fill="currentColor" aria-hidden="true">${cells.join("")}</svg>`;
  }

  function barcodeSvg(value) {
    const patterns = {
      "0": "nnnwwnwnn", "1": "wnnwnnnnw", "2": "nnwwnnnnw", "3": "wnwwnnnnn", "4": "nnnwwnnnw",
      "5": "wnnwwnnnn", "6": "nnwwwnnnn", "7": "nnnwnnwnw", "8": "wnnwnnwnn", "9": "nnwwnnwnn",
      A: "wnnnnwnnw", B: "nnwnnwnnw", C: "wnwnnwnnn", D: "nnnnwwnnw", E: "wnnnwwnnn",
      F: "nnwnwwnnn", G: "nnnnnwwnw", H: "wnnnnwwnn", I: "nnwnnwwnn", J: "nnnnwwwnn",
      K: "wnnnnnnww", L: "nnwnnnnww", M: "wnwnnnnwn", N: "nnnnwnnww", O: "wnnnwnnwn",
      P: "nnwnwnnwn", Q: "nnnnnnwww", R: "wnnnnnwwn", S: "nnwnnnwwn", T: "nnnnwnwwn",
      U: "wwnnnnnnw", V: "nwwnnnnnw", W: "wwwnnnnnn", X: "nwnnwnnnw", Y: "wwnnwnnnn",
      Z: "nwwnwnnnn", "-": "nwnnnnwnw", ".": "wwnnnnwnn", " ": "nwwnnnwnn", "$": "nwnwnwnnn",
      "/": "nwnwnnnwn", "+": "nwnnnwnwn", "%": "nnnwnwnwn", "*": "nwnnwnwnn"
    };
    const data = `*${String(value || "").toUpperCase().replace(/[^0-9A-Z .\-/$+%]/g, "-")}*`;
    const bars = [];
    let x = 0;
    const narrow = 1;
    const wide = 2.4;

    data.split("").forEach((char) => {
      const pattern = patterns[char] || patterns["-"];
      pattern.split("").forEach((part, index) => {
        const width = part === "w" ? wide : narrow;
        if (index % 2 === 0) bars.push(`<rect x="${x}" y="0" width="${width}" height="32"/>`);
        x += width;
      });
      x += narrow;
    });

    return `<svg class="etiqueta-barcode" viewBox="0 0 ${x} 32" fill="#111" preserveAspectRatio="none" aria-label="Codigo de barras ${escapeHTML(value)}">${bars.join("")}</svg>`;
  }

  function statusColor(status) {
    return {
      "Em análise": "#2563EB",
      "Aguardando aprovação": "#7C6EF6",
      "Aguardando peça": "#F59E0B",
      "Em reparo": "#FB923C",
      Pronto: "#22C55E",
      Entregue: "#94A3B8"
    }[status] || "#94A3B8";
  }

  function emptyRow(colspan, message) {
    return `<tr><td colspan="${colspan}" class="cell-muted">${message}</td></tr>`;
  }

  function shortLabel(label) {
    const text = String(label || "");
    return text.length > 10 ? `${text.slice(0, 9)}...` : text;
  }

  function cleanText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function getCss(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function setText(id, value) {
    const element = $(`#${id}`);
    if (element) element.textContent = value;
  }

  function getValue(id) {
    const element = $(`#${id}`);
    return element ? element.value.trim() : "";
  }

  function setValue(id, value) {
    const element = $(`#${id}`);
    if (element) element.value = value;
  }

  function on(id, event, handler) {
    const element = $(`#${id}`);
    if (element) element.addEventListener(event, handler);
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  function $$(selector) {
    return [...document.querySelectorAll(selector)];
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function debounce(fn, wait) {
    let timer;
    return function (...args) {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => fn.apply(this, args), wait);
    };
  }
})();
