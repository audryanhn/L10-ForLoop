/* ══════════════════════════════════════════════════════
   QUESTION BANK
══════════════════════════════════════════════════════ */
const QB = {
  /* ─── FOR LOOP DASAR ─────────────────────────────── */
  for: [
    {
      topic: "for",
      diff: "easy",
      instr:
        "Lengkapi <strong>for loop</strong> agar mencetak angka 1 sampai 5.",
      format: "fill",
      tpl: `<span class="kw">for</span> (<span class="kw">let</span> i = <span class="blank" id="b0"><input id="i0" placeholder="awal"/></span>; i <span class="op">&lt;=</span> <span class="blank" id="b1"><input id="i1" placeholder="batas"/></span>; i<span class="op">++</span>) {\n  console.<span class="fn">log</span>(i);\n}`,
      blanks: ["1", "5"],
      accept: [["1"], ["5"]],
      output: "1\n2\n3\n4\n5",
      expl: "<code>let i = 1</code> → mulai dari 1. <code>i &lt;= 5</code> → batas akhir 5. <code>i++</code> → naik 1 tiap iterasi.",
    },
    {
      topic: "for",
      diff: "easy",
      instr: "Apa output dari kode berikut ini?",
      format: "choice",
      code: `for (let i = 0; i < 4; i++) {\n  console.log(i * 2);\n}`,
      choices: ["0\n2\n4\n6", "0\n2\n4\n6\n8", "2\n4\n6\n8", "1\n2\n3\n4"],
      correct: 0,
      expl: "i mulai 0, berhenti sebelum 4: i = 0,1,2,3. Dikalikan 2: 0, 2, 4, 6.",
    },
    {
      topic: "for",
      diff: "medium",
      instr:
        "Lengkapi kode untuk mencetak kamar hotel dari nomor <strong>101 sampai 105</strong>.",
      format: "fill",
      tpl: `<span class="kw">for</span> (<span class="kw">let</span> i = <span class="blank" id="b0"><input id="i0" placeholder="?"/></span>; i <span class="op">&lt;=</span> <span class="blank" id="b1"><input id="i1" placeholder="?"/></span>; <span class="blank" id="b2"><input id="i2" placeholder="?"/></span>) {\n  console.<span class="fn">log</span>(<span class="str">"Kamar "</span> + i);\n}`,
      blanks: ["101", "105", "i++"],
      accept: [["101"], ["105"], ["i++", "i += 1", "i=i+1"]],
      output: "Kamar 101\nKamar 102\nKamar 103\nKamar 104\nKamar 105",
      expl: "Inisialisasi <code>i = 101</code>, kondisi <code>i &lt;= 105</code>, increment <code>i++</code>.",
    },
    {
      topic: "for",
      diff: "medium",
      instr: "Berapa kali loop ini berjalan?",
      format: "choice",
      code: `for (let i = 10; i >= 1; i -= 3) {\n  console.log(i);\n}`,
      choices: [
        "4 kali\n(10, 7, 4, 1)",
        "3 kali\n(10, 7, 4)",
        "5 kali\n(10, 7, 4, 1, -2)",
        "10 kali",
      ],
      correct: 0,
      expl: "i: 10 → 7 → 4 → 1 → -2. Saat i = -2, kondisi i ≥ 1 false → berhenti. Jadi 4 iterasi: 10, 7, 4, 1.",
    },
    {
      topic: "for",
      diff: "hard",
      instr: "Apa nilai <strong>total</strong> setelah kode ini selesai?",
      format: "choice",
      code: `let total = 0;\nfor (let i = 1; i <= 5; i++) {\n  total += i;\n}\nconsole.log(total);`,
      choices: ["15", "10", "20", "25"],
      correct: 0,
      expl: "1+2+3+4+5 = 15. Pola ini disebut <em>accumulate</em> — mengumpulkan nilai di setiap iterasi.",
    },
  ],

  /* ─── FOR LOOP + IF ──────────────────────────────── */
  forif: [
    {
      topic: "forif",
      diff: "easy",
      instr:
        "Lengkapi <strong>kondisi if</strong> untuk mencetak hanya bilangan <em>genap</em> dari 1 sampai 10.",
      format: "fill",
      tpl: `<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">1</span>; i <span class="op">&lt;=</span> <span class="num">10</span>; i++) {\n  <span class="kw">if</span> (<span class="blank" id="b0"><input id="i0" placeholder="kondisi?"/></span>) {\n    console.<span class="fn">log</span>(i);\n  }\n}`,
      blanks: ["i % 2 === 0"],
      accept: [["i % 2 === 0", "i%2===0", "i%2==0", "i % 2 == 0"]],
      output: "2\n4\n6\n8\n10",
      expl: "<code>i % 2 === 0</code> menggunakan modulo — sisa bagi 2 sama dengan 0 berarti bilangan genap. Pola ini disebut <em>filter</em>.",
    },
    {
      topic: "forif",
      diff: "easy",
      instr:
        "Kode berikut menghitung berapa kamar yang <em>tersedia</em>. Apa output-nya?",
      format: "choice",
      code: `const kamar = ["tersedia","booked","tersedia","tersedia","booked"];\nlet count = 0;\nfor (let i = 0; i < kamar.length; i++) {\n  if (kamar[i] === "tersedia") {\n    count++;\n  }\n}\nconsole.log("Tersedia: " + count);`,
      choices: ["Tersedia: 3", "Tersedia: 2", "Tersedia: 5", "Tersedia: 4"],
      correct: 0,
      expl: 'Array punya 5 elemen; "tersedia" muncul di index 0, 2, 3 → count = 3. Pola ini disebut <em>count</em>.',
    },
    {
      topic: "forif",
      diff: "medium",
      instr:
        'Di The Grand Hotel, kamar dengan harga <strong>di atas 500rb</strong> dikategorikan "Premium". Lengkapi kondisi <em>classify</em>-nya.',
      format: "fill",
      tpl: `<span class="kw">const</span> harga = [<span class="num">300000</span>, <span class="num">750000</span>, <span class="num">450000</span>, <span class="num">900000</span>];\n<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> harga.<span class="fn">length</span>; i++) {\n  <span class="kw">if</span> (<span class="blank" id="b0"><input id="i0" placeholder="kondisi?"/></span>) {\n    console.<span class="fn">log</span>(harga[i] + <span class="str">" — Premium"</span>);\n  } <span class="kw">else</span> {\n    console.<span class="fn">log</span>(harga[i] + <span class="str">" — Standard"</span>);\n  }\n}`,
      blanks: ["harga[i] > 500000"],
      accept: [["harga[i] > 500000", "harga[i]>500000"]],
      output:
        "300000 — Standard\n750000 — Premium\n450000 — Standard\n900000 — Premium",
      expl: "<code>harga[i] &gt; 500000</code> mengecek setiap harga. Pola ini disebut <em>classify</em> — memberi label berdasarkan kondisi.",
    },
    {
      topic: "forif",
      diff: "medium",
      instr:
        "Kode ini menjumlahkan harga semua kamar. Apa nilai <strong>total</strong>-nya?",
      format: "choice",
      code: `const harga = [200000, 350000, 500000, 150000];\nlet total = 0;\nfor (let i = 0; i < harga.length; i++) {\n  total += harga[i];\n}\nconsole.log(total);`,
      choices: ["1200000", "1000000", "1050000", "1150000"],
      correct: 0,
      expl: "200000 + 350000 + 500000 + 150000 = 1.200.000. Pola <em>accumulate</em> — mengumpulkan nilai dari setiap elemen array.",
    },
    {
      topic: "forif",
      diff: "hard",
      instr:
        "Lengkapi kode <em>filter</em> untuk mengumpulkan hanya kamar yang <strong>tersedia</strong> ke array baru.",
      format: "fill",
      tpl: `<span class="kw">const</span> kamar = [\n  {no:<span class="num">101</span>, status:<span class="str">"tersedia"</span>},\n  {no:<span class="num">102</span>, status:<span class="str">"booked"</span>},\n  {no:<span class="num">103</span>, status:<span class="str">"tersedia"</span>}\n];\n<span class="kw">const</span> available = [];\n<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> kamar.<span class="fn">length</span>; i++) {\n  <span class="kw">if</span> (kamar[i].<span class="fn">status</span> <span class="op">===</span> <span class="str">"tersedia"</span>) {\n    available.<span class="blank" id="b0"><input id="i0" placeholder="method?"/></span>(kamar[i]);\n  }\n}\nconsole.<span class="fn">log</span>(available.<span class="fn">length</span>); <span class="cmt">// 2</span>`,
      blanks: ["push"],
      accept: [["push"]],
      output: "2",
      expl: '<code>push()</code> menambahkan elemen ke akhir array. Hasilnya array <code>available</code> berisi 2 kamar dengan status "tersedia".',
    },
  ],

  /* ─── LOOP WITH DOM ──────────────────────────────── */
  //   dom: [
  //     {
  //       topic: "dom",
  //       diff: "easy",
  //       instr:
  //         "Lengkapi kode untuk membuat <strong>elemen li</strong> menggunakan <em>createElement</em> dan menambahkannya ke list.",
  //       format: "fill",
  //       tpl: `<span class="kw">const</span> fasilitas = [<span class="str">"WiFi"</span>, <span class="str">"Pool"</span>, <span class="str">"Gym"</span>];\n<span class="kw">const</span> list = document.<span class="fn">getElementById</span>(<span class="str">"list"</span>);\n<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> fasilitas.<span class="fn">length</span>; i++) {\n  <span class="kw">const</span> item = document.<span class="blank" id="b0"><input id="i0" placeholder="method?"/></span>(<span class="str">"li"</span>);\n  item.<span class="fn">textContent</span> = fasilitas[i];\n  list.<span class="blank" id="b1"><input id="i1" placeholder="method?"/></span>(item);\n}`,
  //       blanks: ["createElement", "appendChild"],
  //       accept: [["createElement"], ["appendChild"]],
  //       domType: "facilities",
  //       domData: ["WiFi", "Pool", "Gym"],
  //       expl: '<code>createElement("li")</code> membuat elemen baru. <code>appendChild(item)</code> menambahkannya sebagai anak dari elemen list.',
  //     },
  //     {
  //       topic: "dom",
  //       diff: "easy",
  //       instr:
  //         "Manakah perbedaan utama antara <code>createElement+appendChild</code> dan <code>innerHTML</code>?",
  //       format: "choice",
  //       code: `// Cara A\nconst el = document.createElement("li");\nel.textContent = "Kamar 101";\nlist.appendChild(el);\n\n// Cara B\nlist.innerHTML += "<li>Kamar 101</li>";`,
  //       choices: [
  //         "Cara A lebih aman dari XSS;\nCara B bisa reset event listener",
  //         "Cara B lebih aman;\nCara A tidak bisa dipakai di loop",
  //         "Keduanya sama persis,\ntidak ada perbedaan",
  //         "Cara A hanya untuk gambar;\nCara B untuk teks",
  //       ],
  //       correct: 0,
  //       expl: "<code>createElement</code> lebih aman karena teks diperlakukan sebagai teks biasa (tidak di-parse sebagai HTML). <code>innerHTML +=</code> juga me-reset semua event listener yang sudah terpasang.",
  //     },
  //     {
  //       topic: "dom",
  //       diff: "medium",
  //       instr:
  //         "Lengkapi template literal untuk membuat <strong>kartu kamar</strong> di The Grand Hotel.",
  //       format: "fill",
  //       tpl: `<span class="kw">const</span> rooms = [\n  {no:<span class="num">101</span>, type:<span class="str">"Deluxe"</span>,    price:<span class="num">500000</span>},\n  {no:<span class="num">102</span>, type:<span class="str">"Suite"</span>,     price:<span class="num">900000</span>},\n  {no:<span class="num">103</span>, type:<span class="str">"Standard"</span>, price:<span class="num">300000</span>},\n];\n<span class="kw">const</span> container = document.<span class="fn">getElementById</span>(<span class="str">"rooms"</span>);\n<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> rooms.<span class="fn">length</span>; i++) {\n  container.<span class="fn">innerHTML</span> += <span class="blank" id="b0"><input id="i0" placeholder="\`...\`?"/></span>;\n}`,
  //       blanks: ['`<div class="card">${rooms[i].no} - ${rooms[i].type}</div>`'],
  //       accept: [
  //         [
  //           '`<div class="card">${rooms[i].no} - ${rooms[i].type}</div>`',
  //           "`<div>${rooms[i].no} - ${rooms[i].type}</div>`",
  //           "`<p>${rooms[i].no} - ${rooms[i].type}</p>`",
  //           "`<li>${rooms[i].no} - ${rooms[i].type}</li>`",
  //           "`<div>${rooms[i].type}</div>`",
  //           "`<div>${rooms[i].no}</div>`",
  //         ],
  //       ],
  //       domType: "rooms",
  //       domData: [
  //         { no: 101, type: "Deluxe", price: 500000 },
  //         { no: 102, type: "Suite", price: 900000 },
  //         { no: 103, type: "Standard", price: 300000 },
  //       ],
  //       expl: "Template literal (<code>` `</code>) memungkinkan kita menyisipkan variabel langsung ke string HTML menggunakan <code>${...}</code>.",
  //     },
  //     {
  //       topic: "dom",
  //       diff: "medium",
  //       instr:
  //         "Kode ini membuat kartu kamar dengan <em>classList</em> berdasarkan status. Apa yang ditampilkan untuk kamar ketiga?",
  //       format: "choice",
  //       code: `const rooms = [\n  {no:101, status:"available"},\n  {no:102, status:"booked"},\n  {no:103, status:"available"},\n];\nfor (let i = 0; i < rooms.length; i++) {\n  const card = document.createElement("div");\n  card.textContent = "Kamar " + rooms[i].no;\n  card.classList.add(rooms[i].status);\n  container.appendChild(card);\n}`,
  //       choices: [
  //         'Div dengan class "available"\nbertuliskan "Kamar 103"',
  //         'Div dengan class "booked"\nbertuliskan "Kamar 103"',
  //         "Div kosong tanpa class",
  //         "Error — classList tidak bisa\npakai variabel",
  //       ],
  //       correct: 0,
  //       expl: 'rooms[2].status adalah "available", jadi <code>card.classList.add("available")</code> menambahkan class tersebut. <code>textContent</code> diisi "Kamar 103".',
  //     },
  //     {
  //       topic: "dom",
  //       diff: "hard",
  //       instr:
  //         "Lengkapi kode: loop membuat kartu tiap kamar, dan <strong>hanya kamar tersedia</strong> yang diberi class <em>available</em>.",
  //       format: "fill",
  //       tpl: `<span class="kw">const</span> rooms = [\n  {no:<span class="num">101</span>, status:<span class="str">"available"</span>, price:<span class="num">400000</span>},\n  {no:<span class="num">102</span>, status:<span class="str">"booked"</span>,    price:<span class="num">600000</span>},\n  {no:<span class="num">103</span>, status:<span class="str">"available"</span>, price:<span class="num">350000</span>},\n];\n<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> rooms.<span class="fn">length</span>; i++) {\n  <span class="kw">const</span> card = document.<span class="fn">createElement</span>(<span class="str">"div"</span>);\n  card.<span class="fn">innerHTML</span> = <span class="blank" id="b0"><input id="i0" placeholder="template?"/></span>;\n  <span class="kw">if</span> (rooms[i].<span class="fn">status</span> <span class="op">===</span> <span class="str">"available"</span>) {\n    card.<span class="fn">classList</span>.<span class="blank" id="b1"><input id="i1" placeholder="method?"/></span>(<span class="str">"available"</span>);\n  }\n  container.<span class="fn">appendChild</span>(card);\n}`,
  //       blanks: ["`<b>Kamar ${rooms[i].no}</b>`", "add"],
  //       accept: [
  //         [
  //           "`<b>Kamar ${rooms[i].no}</b>`",
  //           "`Kamar ${rooms[i].no}`",
  //           "`<p>Kamar ${rooms[i].no}</p>`",
  //           "`${rooms[i].no}`",
  //         ],
  //         ["add"],
  //       ],
  //       domType: "rooms-status",
  //       domData: [
  //         { no: 101, status: "available", price: 400000 },
  //         { no: 102, status: "booked", price: 600000 },
  //         { no: 103, status: "available", price: 350000 },
  //       ],
  //       expl: 'Template literal untuk innerHTML, dan <code>classList.add("available")</code> untuk menambah class. Gabungan loop + if + DOM adalah pola yang sangat sering dipakai.',
  //     },
  //   ],
};

function getMix() {
  const pool = [...QB.for, ...QB.forif, ...QB.dom];
  return pool.sort(() => Math.random() - 0.5).slice(0, 9);
}

/* ══════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════ */
const S = {
  mode: "for",
  qs: [],
  cur: 0,
  hp: 3,
  xp: 0,
  ok: 0,
  err: 0,
  answered: false,
};

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function goMenu() {
  showScreen("menu");
}

function startGame(mode) {
  S.mode = mode;
  S.qs = mode === "mix" ? getMix() : [...QB[mode]];
  S.cur = 0;
  S.hp = 3;
  S.xp = 0;
  S.ok = 0;
  S.err = 0;

  const cfg = {
    for: { label: "FOR LOOP", cls: "t-for" },
    forif: { label: "FOR + IF", cls: "t-forif" },
    dom: { label: "LOOP & DOM", cls: "t-dom" },
    mix: { label: "MIX CHALLENGE", cls: "t-mix" },
  };
  const c = cfg[mode];
  const el = document.getElementById("h-title");
  el.textContent = c.label;
  el.className = "h-title " + c.cls;

  showScreen("game");
  renderQ();
}

function retryGame() {
  startGame(S.mode);
}

/* ─── RENDER ─── */
function renderQ() {
  const q = S.qs[S.cur];
  S.answered = false;
  const total = S.qs.length;

  document.getElementById("q-counter").textContent = `${S.cur + 1}/${total}`;
  document.getElementById("q-num").textContent = `Q${S.cur + 1}`;
  document.getElementById("xp-lbl").textContent = `${S.xp} XP`;

  // progress bar
  document.getElementById("prog-fill").style.width =
    `${(S.cur / total) * 100}%`;

  // HP
  const hpRow = document.getElementById("hp-row");
  hpRow.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const d = document.createElement("div");
    d.className = "hp-dot " + (i < S.hp ? "on" : "off");
    hpRow.appendChild(d);
  }

  // type badge
  const badge = document.getElementById("q-typebadge");
  const badgeCfg = { for: "for", forif: "for + if", dom: "loop + DOM" };
  const badgeCls = { for: "tb-for", forif: "tb-forif", dom: "tb-dom" };
  badge.textContent = badgeCfg[q.topic] || q.topic;
  badge.className = "q-typebadge " + (badgeCls[q.topic] || "tb-for");

  // diff
  const diff = document.getElementById("q-diff");
  diff.textContent = {
    easy: "★ Easy",
    medium: "★★ Medium",
    hard: "★★★ Hard",
  }[q.diff];
  diff.className = "q-diff " + q.diff;

  // instruction
  document.getElementById("q-instr").innerHTML = q.instr;

  // content
  const content = document.getElementById("q-content");
  content.innerHTML = "";

  if (q.format === "fill") {
    const cb = document.createElement("div");
    cb.className = "code-block";
    cb.innerHTML = q.tpl;
    content.appendChild(cb);
  } else {
    const cb = document.createElement("div");
    cb.className = "code-block";
    cb.innerHTML = escCode(q.code);
    content.appendChild(cb);

    const grid = document.createElement("div");
    grid.className = "choices";
    q.choices.forEach((c, i) => {
      const btn = document.createElement("button");
      btn.className = "c-btn";
      btn.textContent = c;
      btn.onclick = () => submitChoice(i);
      grid.appendChild(btn);
    });
    content.appendChild(grid);
  }

  // DOM preview
  const domWrap = document.getElementById("dom-wrap");
  const domStage = document.getElementById("dom-stage");
  domStage.innerHTML = "";
  if (q.domType) {
    domWrap.style.display = "block";
    renderDomPreview(q, domStage, false);
  } else {
    domWrap.style.display = "none";
  }

  // feedback reset
  const fb = document.getElementById("feedback");
  fb.className = "feedback";

  // buttons
  document.getElementById("btn-submit").style.display =
    q.format === "fill" ? "inline-block" : "none";
  document.getElementById("btn-next").style.display = "none";

  if (q.format === "fill")
    setTimeout(() => {
      const el = document.getElementById("i0");
      if (el) el.focus();
    }, 80);
}

/* ─── DOM PREVIEW RENDERER ─── */
function renderDomPreview(q, stage, reveal) {
  stage.innerHTML = "";
  if (!reveal) {
    const ph = document.createElement("div");
    ph.style.cssText =
      "color:var(--text3);font-family:var(--pixel);font-size:7px;padding:.5rem;";
    ph.textContent = reveal ? "" : "← jawab dulu untuk melihat preview";
    stage.appendChild(ph);
    return;
  }
  if (q.domType === "facilities") {
    q.domData.forEach((f, idx) => {
      const el = document.createElement("div");
      el.className = "fac-item";
      el.style.animationDelay = `${idx * 0.08}s`;
      const icons = {
        WiFi: "📶",
        Pool: "🏊",
        Gym: "💪",
        Spa: "🛁",
        Restaurant: "🍽️",
        Parking: "🅿️",
      };
      el.innerHTML = `<span class="fac-icon">${icons[f] || "✅"}</span><span>${f}</span>`;
      stage.appendChild(el);
    });
  } else if (q.domType === "rooms" || q.domType === "rooms-status") {
    q.domData.forEach((r, idx) => {
      const card = document.createElement("div");
      const isAvail = r.status === "available" || q.domType === "rooms";
      card.className = "room-card " + (isAvail ? "available" : "booked");
      card.style.animationDelay = `${idx * 0.1}s`;
      const statusIcon = isAvail ? "🟢" : "🔴";
      card.innerHTML = `<div class="rc-num">ROOM ${r.no}</div><div class="rc-type">${r.type || "Standard"}</div><div class="rc-price">${statusIcon} Rp${(r.price || 0).toLocaleString()}</div>`;
      stage.appendChild(card);
    });
  }
}

/* ─── SUBMIT FILL ─── */
function submitAnswer() {
  if (S.answered) return;
  const q = S.qs[S.cur];
  if (q.format !== "fill") return;

  const inputs = q.blanks.map((_, i) => document.getElementById(`i${i}`));
  const answers = inputs.map((el) =>
    el ? el.value.trim().replace(/\s+/g, " ") : "",
  );

  let allOk = true;
  answers.forEach((ans, i) => {
    const accepted = q.accept[i].map((a) =>
      a.replace(/\s+/g, " ").toLowerCase(),
    );
    const ok = accepted.includes(ans.toLowerCase());
    const bEl = document.getElementById(`b${i}`);
    const iEl = document.getElementById(`i${i}`);
    bEl.classList.add(ok ? "ok" : "err");
    iEl.classList.add(ok ? "ok" : "err");
    if (!ok) allOk = false;
  });

  finishAttempt(allOk, q);
}

/* ─── SUBMIT CHOICE ─── */
function submitChoice(idx) {
  if (S.answered) return;
  const q = S.qs[S.cur];
  const btns = document.querySelectorAll(".c-btn");
  btns.forEach((b) => (b.disabled = true));
  const ok = idx === q.correct;
  btns[idx].classList.add(ok ? "ok" : "err");
  if (!ok) btns[q.correct].classList.add("ok");
  finishAttempt(ok, q);
}

/* ─── FINISH ATTEMPT ─── */
function finishAttempt(ok, q) {
  S.answered = true;
  const xpMap = { easy: 10, medium: 20, hard: 30 };

  if (ok) {
    S.ok++;
    S.xp += xpMap[q.diff];
    document.getElementById("xp-lbl").textContent = `${S.xp} XP`;
  } else {
    S.err++;
    S.hp = Math.max(0, S.hp - 1);
    document.querySelectorAll(".hp-dot").forEach((d, i) => {
      d.className = "hp-dot " + (i < S.hp ? "on" : "off");
    });
  }

  // Show DOM preview if applicable
  if (q.domType) {
    renderDomPreview(q, document.getElementById("dom-stage"), true);
  }

  // Feedback
  const fb = document.getElementById("feedback");
  const fbIco = document.getElementById("fb-ico");
  const fbBody = document.getElementById("fb-body");
  fb.className = "feedback show " + (ok ? "fb-ok" : "fb-err");

  if (ok) {
    fbIco.textContent = "✅";
    fbBody.innerHTML = `<strong class="fb-ok-color">Benar! +${xpMap[q.diff]} XP</strong><div class="expl">${q.expl}</div>`;
  } else {
    fbIco.textContent = "❌";
    let correctStr = "";
    if (q.format === "fill") {
      correctStr = `Jawaban: <code>${q.blanks.join("</code>, <code>")}</code>`;
    } else {
      correctStr = `Jawaban: <code>${q.choices[q.correct]}</code>`;
    }
    fbBody.innerHTML = `<strong class="fb-err-color">Belum tepat...</strong><div class="expl">${correctStr}<br>${q.expl}</div>`;
  }

  document
    .querySelectorAll(".blank input")
    .forEach((el) => (el.disabled = true));
  document.getElementById("btn-submit").style.display = "none";
  document.getElementById("btn-next").style.display = "inline-block";

  spawnPtcl(ok);
}

function nextQuestion() {
  S.cur++;
  if (S.cur >= S.qs.length || S.hp <= 0) showResult();
  else renderQ();
}

/* ─── RESULT ─── */
function showResult() {
  const pct = S.ok / S.qs.length;
  let grade, stars, title, msg;
  if (pct >= 1) {
    grade = "S";
    stars = "⭐⭐⭐";
    title = "PERFECT!";
    msg = "Sempurna! Kamu menguasai semua materi loop. Siap ke Lesson 11!";
  } else if (pct >= 0.8) {
    grade = "A";
    stars = "⭐⭐⭐";
    title = "GREAT JOB!";
    msg = "Hampir sempurna! Sedikit review untuk mencapai S rank.";
  } else if (pct >= 0.6) {
    grade = "B";
    stars = "⭐⭐";
    title = "GOOD JOB!";
    msg = "Sudah bagus! Ulangi soal yang salah untuk memperkuat pemahamanmu.";
  } else if (pct >= 0.4) {
    grade = "C";
    stars = "⭐";
    title = "KEEP GOING!";
    msg = "Masih perlu latihan. Baca lagi materi for loop dan coba lagi!";
  } else {
    grade = "D";
    stars = "💀";
    title = "GAME OVER";
    msg = "Jangan menyerah! Yuk baca materi dari awal dan coba lagi.";
  }

  if (S.hp <= 0 && grade !== "D") {
    title = "HP HABIS!";
    grade = "C";
    stars = "💔";
    msg = "HP habis! Coba lebih hati-hati saat menjawab.";
  }

  document.getElementById("r-title").textContent = title;
  document.getElementById("r-stars").textContent = stars;
  document.getElementById("r-grade").textContent = grade;
  document.getElementById("r-grade").className = "r-grade g" + grade;
  document.getElementById("s-ok").textContent = S.ok;
  document.getElementById("s-err").textContent = S.err;
  document.getElementById("s-xp").textContent = S.xp;
  document.getElementById("r-msg").textContent = msg;
  showScreen("result");
}

/* ─── PARTICLES ─── */
function spawnPtcl(ok) {
  const colors = ok
    ? ["#10b981", "#34d399", "#06b6d4", "#a7f3d0"]
    : ["#ef4444", "#f87171", "#f59e0b", "#fca5a5"];
  const cx = window.innerWidth / 2,
    cy = window.innerHeight / 2;
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("div");
    p.className = "ptcl";
    p.style.cssText = `left:${cx}px;top:${cy}px;background:${colors[i % colors.length]};--dx:${(Math.random() - 0.5) * 220}px;--dy:${(Math.random() - 0.85) * 170}px;animation-duration:${0.8 + Math.random() * 0.6}s;`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1500);
  }
}

/* ─── UTILS ─── */
function escCode(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /\b(for|let|const|var|if|else|return|function)\b/g,
      '<span class="kw">$1</span>',
    )
    .replace(/\b(console)\b/g, '<span class="fn">$1</span>')
    .replace(/(".*?"|'.*?')/g, '<span class="str">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="num">$1</span>')
    .replace(/(\/\/[^\n]*)/g, '<span class="cmt">$1</span>');
}

document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const nb = document.getElementById("btn-next");
  const sb = document.getElementById("btn-submit");
  if (nb && nb.style.display !== "none") nextQuestion();
  else if (sb && sb.style.display !== "none") submitAnswer();
});
