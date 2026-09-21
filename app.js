const STORAGE_KEY = 'sanda-training-v1';

const FREE_EXERCISE_DB_URL = 'https://github.com/yuhonas/free-exercise-db';
const PEXELS_LICENSE_URL = 'https://www.pexels.com/license/';

function publicDomainMedia(slug, alt){
  return {
    images: [
      `assets/exercises/${slug}-1.jpg`,
      `assets/exercises/${slug}-2.jpg`
    ],
    alt,
    sourceLabel: 'Free Exercise DB · domínio público',
    sourceUrl: FREE_EXERCISE_DB_URL
  };
}

const EXERCISE_MEDIA = {
  boxJump: publicDomainMedia('box-jump', 'Demonstração de salto na caixa'),
  barbellSquat: publicDomainMedia('barbell-squat', 'Demonstração de agachamento livre com barra'),
  inclineDumbbellPress: publicDomainMedia('incline-dumbbell-press', 'Demonstração de supino inclinado com halteres'),
  pullups: publicDomainMedia('pullups', 'Demonstração de barra fixa'),
  romanianDeadlift: publicDomainMedia('romanian-deadlift', 'Demonstração de levantamento terra romeno'),
  seatedCableRow: publicDomainMedia('seated-cable-row', 'Demonstração de remada baixa no cabo'),
  pallofPress: publicDomainMedia('pallof-press', 'Demonstração de Pallof press'),
  stationaryBike: publicDomainMedia('stationary-bike', 'Demonstração de bicicleta ergométrica'),
  medicineBallRotation: publicDomainMedia('medicine-ball-rotation', 'Demonstração de rotação com medicine ball'),
  trapBarDeadlift: publicDomainMedia('trap-bar-deadlift', 'Demonstração de levantamento terra com trap bar'),
  dumbbellShoulderPress: publicDomainMedia('dumbbell-shoulder-press', 'Demonstração de desenvolvimento com halteres'),
  barbellRow: publicDomainMedia('barbell-row', 'Demonstração de remada curvada com barra'),
  bulgarianSplitSquat: publicDomainMedia('bulgarian-split-squat', 'Demonstração de afundo búlgaro com halteres'),
  landminePress: publicDomainMedia('landmine-press', 'Demonstração de landmine press unilateral'),
  farmerWalk: publicDomainMedia('farmer-walk', 'Demonstração de farmer walk'),
  treadmill: publicDomainMedia('treadmill', 'Demonstração de cardio na esteira'),
  sanda: {
    images: ['assets/exercises/sanda-training.jpg'],
    alt: 'Treino de golpes no saco',
    sourceLabel: 'Foto de Annushka Ahuja · Pexels',
    sourceUrl: 'https://www.pexels.com/photo/woman-kicking-the-heavy-bag-7992158/',
    licenseUrl: PEXELS_LICENSE_URL
  },
  sparring: {
    images: ['assets/exercises/sparring.jpg'],
    alt: 'Treino de sparring de kickboxing',
    sourceLabel: 'Foto de Gleb Krasnoborov · Pexels',
    sourceUrl: 'https://www.pexels.com/photo/two-men-doing-kickboxing-11045283/',
    licenseUrl: PEXELS_LICENSE_URL
  }
};

const workouts = {
  mon: {
    short: 'SEG', name: 'Segunda', title: 'Força + potência', duration: '60–80 min', intensity: 'Principal da semana',
    description: 'Treino mais pesado da semana. Priorize execução limpa e termine as séries com aproximadamente 2 repetições na reserva.',
    exercises: [
      { name: 'Box jump ou salto vertical', prescription: '4 × 3', note: 'Máxima explosão. Descanse 60–90 s. Pare se a altura do salto cair.', sets: 4, media: EXERCISE_MEDIA.boxJump },
      { name: 'Agachamento livre', prescription: '4 × 4 · RPE 7,5–8', note: 'Descanse 2–3 min. Carga forte, mas sem grind e sem falha.', sets: 4, load: true, media: EXERCISE_MEDIA.barbellSquat },
      { name: 'Supino inclinado com halteres', prescription: '4 × 6', note: 'Substitui o supino reto. Controle na descida e acelere na subida.', sets: 4, load: true, media: EXERCISE_MEDIA.inclineDumbbellPress },
      { name: 'Barra fixa ou puxada alta', prescription: '4 × 6–8', note: 'Amplitude completa. Adicione carga somente se a técnica continuar limpa.', sets: 4, load: true, media: EXERCISE_MEDIA.pullups },
      { name: 'Terra romeno', prescription: '3 × 6', note: 'Posterior de coxa, glúteo e estabilidade. Sem buscar falha.', sets: 3, load: true, media: EXERCISE_MEDIA.romanianDeadlift },
      { name: 'Remada baixa ou máquina', prescription: '3 × 8', note: 'Escápulas estáveis e tronco firme.', sets: 3, load: true, media: EXERCISE_MEDIA.seatedCableRow },
      { name: 'Pallof press', prescription: '3 × 10 por lado', note: 'Anti-rotação. Segure 1 s na extensão.', sets: 3, load: true, media: EXERCISE_MEDIA.pallofPress }
    ]
  },
  tue: {
    short: 'TER', name: 'Terça', title: 'Motor do Sanda', duration: '50–70 min', intensity: 'Condicionamento',
    description: 'Base aeróbica + rounds específicos. O objetivo é melhorar recuperação entre explosões sem destruir o treino de quarta.',
    blocks: [
      { title: 'Cardio contínuo', text: '25–35 min · RPE 4–5/10. Bike, elíptico ou esteira inclinada. Você deve conseguir conversar.' },
      { title: 'Saco', text: '3 × 2 min · 1 min de descanso. Faça 20 s trabalhando a 60–70% + 10 s de explosão. Repita. Últimos 20 s mais fortes.' },
      { title: 'Bike sprint', text: '4 × 10 s muito forte + 50 s bem leve. Acabou. Não precisa adicionar mais HIIT.' }
    ],
    exercises: [
      { name: 'Cardio contínuo', prescription: '25–35 min · RPE 4–5', note: 'Confortável e contínuo. Não transforme em HIIT.', sets: 1, media: EXERCISE_MEDIA.stationaryBike },
      { name: 'Rounds no saco', prescription: '3 × 2 min · descanso 1 min', note: 'Toda combinação termina em guarda. Trabalhe, recupere em movimento e volte a explodir.', sets: 3, media: EXERCISE_MEDIA.sanda },
      { name: 'Bike sprint', prescription: '4 × 10 s / 50 s leve', note: 'Potência alta nos 10 s. Se a potência despencar, encerre.', sets: 4, media: EXERCISE_MEDIA.stationaryBike }
    ]
  },
  wed: {
    short: 'QUA', name: 'Quarta', title: 'Sanda técnico', duration: '20h–21h', intensity: 'Técnica',
    description: 'Só Sanda. Use o treino para melhorar economia de movimento, respiração e retorno da mão para a guarda.',
    blocks: [
      { title: 'Foco do dia', text: 'Respirar durante combinações, relaxar ombros, voltar a mão rápido e circular enquanto recupera o fôlego.' },
      { title: 'Se houver circuito', text: 'Conte o circuito como condicionamento intenso. Não acrescente HIIT depois.' }
    ],
    exercises: [
      { name: 'Treino de Sanda', prescription: '20h–21h', note: 'Prioridade técnica. Se houver circuito, ele já vale como estímulo forte.', sets: 1, media: EXERCISE_MEDIA.sanda }
    ]
  },
  thu: {
    short: 'QUI', name: 'Quinta', title: 'Força atlética + aeróbico', duration: '70–90 min', intensity: 'Moderado',
    description: 'Segundo treino de força. Menos desgaste de pernas do que segunda porque você terá Sanda na sexta e possivelmente sparring sábado.',
    exercises: [
      { name: 'Arremesso rotacional de medicine ball', prescription: '4 × 4 por lado', note: 'Explosivo. Se não tiver medicine ball, use landmine rotation leve.', sets: 4, media: EXERCISE_MEDIA.medicineBallRotation },
      { name: 'Trap bar deadlift ou terra', prescription: '3 × 4 · RPE ~7,5', note: 'Sem recorde pessoal. Repetições fortes e tecnicamente limpas.', sets: 3, load: true, media: EXERCISE_MEDIA.trapBarDeadlift },
      { name: 'Desenvolvimento com halteres', prescription: '3 × 6', note: 'Controle escapular. Não chegar à falha.', sets: 3, load: true, media: EXERCISE_MEDIA.dumbbellShoulderPress },
      { name: 'Remada', prescription: '4 × 6–8', note: 'Escolha a variação que permita boa estabilidade.', sets: 4, load: true, media: EXERCISE_MEDIA.barbellRow },
      { name: 'Afundo búlgaro', prescription: '3 × 6 por perna', note: 'Controle, equilíbrio e força unilateral.', sets: 3, load: true, media: EXERCISE_MEDIA.bulgarianSplitSquat },
      { name: 'Landmine press unilateral', prescription: '3 × 8 por braço', note: 'Se não houver landmine, use supino inclinado com halteres.', sets: 3, load: true, media: EXERCISE_MEDIA.landminePress },
      { name: 'Farmer walk', prescription: '3 × 30–40 m', note: 'Carga pesada, postura firme e passada controlada.', sets: 3, load: true, media: EXERCISE_MEDIA.farmerWalk },
      { name: 'Cardio leve', prescription: '20–30 min · RPE 4–5', note: 'Contínuo. Nada de intervalado hoje.', sets: 1, media: EXERCISE_MEDIA.treadmill }
    ]
  },
  fri: {
    short: 'SEX', name: 'Sexta', title: 'Sanda técnico / circuito', duration: '20h–21h', intensity: 'Técnica',
    description: 'Somente Sanda. Preserve-se para o possível sparring de sábado.',
    blocks: [
      { title: 'Se houver circuito', text: 'Faça normalmente e considere esse o treino intenso do dia.' },
      { title: 'Depois do treino', text: 'Não acrescente saco pesado nem sprints. Recuperação tem prioridade.' }
    ],
    exercises: [
      { name: 'Treino de Sanda', prescription: '20h–21h', note: 'Se o laoshi passar circuito, ele já conta como condicionamento.', sets: 1, media: EXERCISE_MEDIA.sanda }
    ]
  },
  sat: {
    short: 'SÁB', name: 'Sábado', title: 'Sparring', duration: 'Variável', intensity: 'Aplicação',
    description: 'Use o sparring como laboratório. Nem todo round precisa virar guerra. O sparring mais sério com a outra academia acontece aproximadamente uma vez por mês.',
    blocks: [
      { title: 'Objetivo 1', text: 'Manter guarda e controlar a respiração mesmo cansado.' },
      { title: 'Objetivo 2', text: 'Explodir, sair e recuperar em movimento em vez de permanecer trocando parado.' },
      { title: 'Sem sparring?', text: 'Faça 3–5 rounds de 2 min no saco, com 1 min de descanso, mantendo qualidade técnica.' }
    ],
    exercises: [
      { name: 'Sparring', prescription: 'Rounds de 2 min', note: 'Controle intensidade. Foque aplicação técnica, respiração, distância e guarda.', sets: 3, media: EXERCISE_MEDIA.sparring }
    ]
  }
};

const dayOrder = ['mon','tue','wed','thu','fri','sat'];
let state = loadState();
let selectedDay = state.selectedDay || getTodayKey();
let currentView = 'workout';

const els = {
  dayTabs: document.getElementById('dayTabs'),
  workoutContainer: document.getElementById('workoutContainer'),
  todayName: document.getElementById('todayName'),
  todayFocus: document.getElementById('todayFocus'),
  goTodayBtn: document.getElementById('goTodayBtn'),
  weekProgressText: document.getElementById('weekProgressText'),
  weekProgressBar: document.getElementById('weekProgressBar'),
  resetWeekBtn: document.getElementById('resetWeekBtn'),
  pageTitle: document.getElementById('pageTitle'),
  exerciseTemplate: document.getElementById('exerciseTemplate'),
  mediaDialog: document.getElementById('exerciseMediaDialog'),
  mediaDialogTitle: document.getElementById('mediaDialogTitle'),
  mediaDialogContent: document.getElementById('mediaDialogContent'),
  mediaDialogClose: document.getElementById('mediaDialogClose')
};

function getTodayKey(){
  const jsDay = new Date().getDay();
  return ({1:'mon',2:'tue',3:'wed',4:'thu',5:'fri',6:'sat'})[jsDay] || 'mon';
}

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { progress:{}, loads:{}, notes:'' }; }
  catch { return { progress:{}, loads:{}, notes:'' }; }
}

function saveState(){
  state.selectedDay = selectedDay;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateWeekProgress();
}

function ensureDayState(day){
  state.progress ||= {};
  state.progress[day] ||= { exercises:{}, sets:{} };
  return state.progress[day];
}

function renderToday(){
  const today = getTodayKey();
  const w = workouts[today];
  els.todayName.textContent = w.name;
  els.todayFocus.textContent = w.title;
}

function renderTabs(){
  els.dayTabs.innerHTML = '';
  dayOrder.forEach(day => {
    const w = workouts[day];
    const btn = document.createElement('button');
    btn.className = 'day-tab';
    if(day === selectedDay) btn.classList.add('active');
    if(isDayComplete(day)) btn.classList.add('completed');
    btn.type = 'button';
    btn.innerHTML = `${w.short}<span>${w.name.slice(0,3)}</span>`;
    btn.addEventListener('click', () => {
      selectedDay = day;
      currentView = 'workout';
      setActiveBottom('workout');
      saveState();
      render();
      window.scrollTo({top: 0, behavior:'smooth'});
    });
    els.dayTabs.appendChild(btn);
  });
}

function renderWorkout(){
  const w = workouts[selectedDay];
  const wrap = document.createElement('div');

  const header = document.createElement('div');
  header.className = 'workout-header';
  header.innerHTML = `
    <h2>${w.title}</h2>
    <p>${w.description}</p>
    <div class="workout-meta">
      <span class="meta-chip">${w.name}</span>
      <span class="meta-chip">${w.duration}</span>
      <span class="meta-chip">${w.intensity}</span>
    </div>`;
  wrap.appendChild(header);

  if(w.blocks?.length){
    const label = document.createElement('div');
    label.className = 'section-label';
    label.textContent = 'Orientação';
    wrap.appendChild(label);
    w.blocks.forEach(block => {
      const card = document.createElement('div');
      card.className = 'info-card';
      card.innerHTML = `<h3>${block.title}</h3><p>${block.text}</p>`;
      wrap.appendChild(card);
    });
  }

  const label = document.createElement('div');
  label.className = 'section-label';
  label.textContent = 'Checklist do treino';
  wrap.appendChild(label);

  w.exercises.forEach((exercise, idx) => wrap.appendChild(createExerciseCard(selectedDay, idx, exercise)));

  els.workoutContainer.innerHTML = '';
  els.workoutContainer.appendChild(wrap);
  els.pageTitle.textContent = 'Treino da semana';
}

function createExerciseCard(day, idx, exercise){
  const node = els.exerciseTemplate.content.firstElementChild.cloneNode(true);
  const dayState = ensureDayState(day);
  const exKey = String(idx);
  const isDone = !!dayState.exercises[exKey];
  if(isDone) node.classList.add('done');

  node.querySelector('.exercise-name').textContent = exercise.name;
  node.querySelector('.exercise-prescription').textContent = exercise.prescription;
  node.querySelector('.exercise-note').textContent = exercise.note;

  const mediaButton = node.querySelector('.exercise-media-button');
  const thumbnail = node.querySelector('.exercise-thumbnail');
  thumbnail.src = exercise.media.images[0];
  thumbnail.alt = exercise.media.alt;
  mediaButton.setAttribute('aria-label', `Ver demonstração: ${exercise.name}`);
  mediaButton.addEventListener('click', () => openMediaDialog(exercise));

  const check = node.querySelector('.exercise-check');
  check.addEventListener('click', () => {
    dayState.exercises[exKey] = !dayState.exercises[exKey];
    if(dayState.exercises[exKey]){
      for(let s=0;s<exercise.sets;s++) dayState.sets[`${idx}-${s}`] = true;
    }
    saveState();
    render();
  });

  const toggle = node.querySelector('.exercise-toggle');
  toggle.addEventListener('click', () => node.classList.toggle('open'));
  node.querySelector('.exercise-heading').addEventListener('click', () => node.classList.toggle('open'));

  const setList = node.querySelector('.set-list');
  for(let s=0; s<exercise.sets; s++){
    const setKey = `${idx}-${s}`;
    const row = document.createElement('div');
    row.className = 'set-row';

    const setCheck = document.createElement('button');
    setCheck.className = 'set-check';
    setCheck.type = 'button';
    setCheck.textContent = '✓';
    if(dayState.sets[setKey]) setCheck.classList.add('done');
    setCheck.addEventListener('click', () => {
      dayState.sets[setKey] = !dayState.sets[setKey];
      const allDone = Array.from({length: exercise.sets}, (_, i) => !!dayState.sets[`${idx}-${i}`]).every(Boolean);
      dayState.exercises[exKey] = allDone;
      saveState();
      render();
    });

    const lab = document.createElement('label');
    lab.textContent = exercise.sets === 1 ? 'Concluído' : `Série ${s+1}`;

    row.append(setCheck, lab);

    if(exercise.load){
      state.loads ||= {};
      const input = document.createElement('input');
      input.className = 'load-input';
      input.inputMode = 'decimal';
      input.placeholder = 'kg';
      input.value = state.loads[`${day}-${idx}-${s}`] || '';
      input.setAttribute('aria-label', `Carga da série ${s+1}`);
      input.addEventListener('change', () => {
        state.loads[`${day}-${idx}-${s}`] = input.value.trim();
        saveState();
      });
      row.appendChild(input);
    }

    setList.appendChild(row);
  }

  return node;
}

function openMediaDialog(exercise){
  const { media } = exercise;
  els.mediaDialogTitle.textContent = exercise.name;
  els.mediaDialogContent.innerHTML = '';

  const gallery = document.createElement('div');
  gallery.className = `media-gallery${media.images.length === 1 ? ' single' : ''}`;

  media.images.forEach((src, index) => {
    const figure = document.createElement('figure');
    figure.className = 'media-figure';

    const image = document.createElement('img');
    image.src = src;
    image.alt = `${media.alt}${media.images.length > 1 ? ` — posição ${index + 1}` : ''}`;
    image.decoding = 'async';

    figure.appendChild(image);
    if(media.images.length > 1){
      const caption = document.createElement('figcaption');
      caption.textContent = `Posição ${index + 1}`;
      figure.appendChild(caption);
    }
    gallery.appendChild(figure);
  });

  const source = document.createElement('p');
  source.className = 'media-source';
  source.append('Fonte: ');

  const sourceLink = document.createElement('a');
  sourceLink.href = media.sourceUrl;
  sourceLink.target = '_blank';
  sourceLink.rel = 'noopener noreferrer';
  sourceLink.textContent = media.sourceLabel;
  source.appendChild(sourceLink);

  if(media.licenseUrl){
    const licenseLink = document.createElement('a');
    licenseLink.href = media.licenseUrl;
    licenseLink.target = '_blank';
    licenseLink.rel = 'noopener noreferrer';
    licenseLink.textContent = 'licença de uso';
    source.append(' · ', licenseLink);
  }

  els.mediaDialogContent.append(gallery, source);
  els.mediaDialog.showModal();
}

function isDayComplete(day){
  const w = workouts[day];
  const dayState = state.progress?.[day];
  if(!dayState) return false;
  return w.exercises.every((_, idx) => !!dayState.exercises[String(idx)]);
}

function updateWeekProgress(){
  const total = dayOrder.reduce((acc, d) => acc + workouts[d].exercises.length, 0);
  const done = dayOrder.reduce((acc, d) => {
    const ds = state.progress?.[d]?.exercises || {};
    return acc + workouts[d].exercises.filter((_, i) => ds[String(i)]).length;
  }, 0);
  const pct = total ? Math.round((done/total)*100) : 0;
  els.weekProgressText.textContent = `${pct}%`;
  els.weekProgressBar.style.width = `${pct}%`;
}

let timer = { remaining:120, interval:null, running:false, label:'Round' };

function renderTimer(){
  els.pageTitle.textContent = 'Timer';
  els.workoutContainer.innerHTML = `
    <section class="timer-card">
      <h2>Timer de treino</h2>
      <p>Use para rounds, descanso ou sprints.</p>
      <div class="timer-display" id="timerDisplay">02:00</div>
      <p class="timer-status" id="timerStatus">Round</p>
      <div class="timer-presets">
        <button class="timer-preset" data-sec="120" data-label="Round">2 min</button>
        <button class="timer-preset" data-sec="60" data-label="Descanso">1 min</button>
        <button class="timer-preset" data-sec="10" data-label="Sprint">10 s</button>
      </div>
      <div class="timer-actions">
        <button class="primary-button" id="timerStart">Iniciar</button>
        <button class="secondary-button" id="timerReset">Resetar</button>
      </div>
    </section>`;

  const display = document.getElementById('timerDisplay');
  const status = document.getElementById('timerStatus');
  const start = document.getElementById('timerStart');
  const reset = document.getElementById('timerReset');

  function paint(){ display.textContent = formatTime(timer.remaining); status.textContent = timer.label; start.textContent = timer.running ? 'Pausar' : 'Iniciar'; }
  paint();

  document.querySelectorAll('.timer-preset').forEach(btn => btn.addEventListener('click', () => {
    stopTimer();
    timer.remaining = Number(btn.dataset.sec);
    timer.label = btn.dataset.label;
    paint();
  }));

  start.addEventListener('click', () => {
    if(timer.running){ stopTimer(); paint(); return; }
    timer.running = true;
    timer.interval = setInterval(() => {
      timer.remaining--;
      if(timer.remaining <= 0){
        timer.remaining = 0;
        stopTimer();
        if(navigator.vibrate) navigator.vibrate([180,80,180]);
      }
      paint();
    },1000);
    paint();
  });
  reset.addEventListener('click', () => { stopTimer(); timer.remaining = timer.label === 'Descanso' ? 60 : timer.label === 'Sprint' ? 10 : 120; paint(); });
}

function stopTimer(){
  clearInterval(timer.interval);
  timer.interval = null;
  timer.running = false;
}

function formatTime(seconds){
  const m = Math.floor(seconds/60).toString().padStart(2,'0');
  const s = (seconds%60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

function renderNotes(){
  els.pageTitle.textContent = 'Notas';
  els.workoutContainer.innerHTML = `
    <section class="notes-card">
      <h2>Notas de treino</h2>
      <p>Registre o que aconteceu no treino, onde cansou, o que funcionou no sparring e o que ajustar.</p>
      <textarea id="notesInput" class="notes-input" placeholder="Ex.: 3º round: guarda começou a cair. Respiração melhor que semana passada...">${escapeHtml(state.notes || '')}</textarea>
    </section>`;
  document.getElementById('notesInput').addEventListener('input', e => { state.notes = e.target.value; saveState(); });
}

function escapeHtml(str){
  return str.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function setActiveBottom(view){
  document.querySelectorAll('.bottom-nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
}

function render(){
  renderToday();
  renderTabs();
  updateWeekProgress();
  if(currentView === 'workout') renderWorkout();
  if(currentView === 'timer') renderTimer();
  if(currentView === 'notes') renderNotes();
}

els.goTodayBtn.addEventListener('click', () => {
  selectedDay = getTodayKey();
  currentView = 'workout';
  setActiveBottom('workout');
  saveState();
  render();
  window.scrollTo({top:0,behavior:'smooth'});
});

els.resetWeekBtn.addEventListener('click', () => {
  if(confirm('Limpar todo o progresso e cargas registradas desta semana?')){
    state.progress = {};
    state.loads = {};
    saveState();
    render();
  }
});

document.querySelectorAll('.bottom-nav-item').forEach(btn => btn.addEventListener('click', () => {
  currentView = btn.dataset.view;
  setActiveBottom(currentView);
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}));

els.mediaDialogClose.addEventListener('click', () => els.mediaDialog.close());
els.mediaDialog.addEventListener('click', event => {
  if(event.target === els.mediaDialog) els.mediaDialog.close();
});

render();
