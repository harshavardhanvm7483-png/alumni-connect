let users = [];
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const skill = document.getElementById('skill').value;

  if (!name || !skill) return alert('Fill all fields');

  users.push({ name, role, skill });
  displayUsers();
}

function displayUsers() {
  const list = document.getElementById('userList');
  list.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.role}) - ${user.skill}`;
    list.appendChild(li);
  });
}

// MESSAGE MODULE
function postMessage() {
  const message = document.getElementById('message').value;
  if (!message) return;

  posts.push(message);
  displayPosts();
}

function displayPosts() {
  const feed = document.getElementById('feed');
  feed.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post;
    feed.appendChild(li);
  });
}

// JOB MODULE
function postJob() {
  const title = document.getElementById('jobTitle').value;
  const company = document.getElementById('company').value;

  if (!title || !company) return alert('Fill all fields');

  jobs.push({ title, company });
  displayJobs();
}

function displayJobs() {
  const list = document.getElementById('jobList');
  list.innerHTML = '';

  jobs.forEach(job => {
    const li = document.createElement('li');
    li.textContent = `${job.title} at ${job.company}`;
    list.appendChild(li);
  });
}

// EVENT MODULE
function addEvent() {
  const name = document.getElementById('eventName').value;
  const date = document.getElementById('eventDate').value;

  if (!name || !date) return alert('Fill all fields');

  events.push({ name, date });
  displayEvents();
}

function displayEvents() {
  const list = document.getElementById('eventList');
  list.innerHTML = '';

  events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.name} on ${event.date}`;
    list.appendChild(li);
  });
}
