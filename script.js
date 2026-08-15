function addSubject() {
  const div = document.createElement('div');
  div.className = 'subject-row';
  div.innerHTML = `
    <input type="text" placeholder="Subject" class="sub-name">
    <select class="grade">
      <option value="10">S - 10</option><option value="9">A+ - 9</option>
      <option value="8.5">A - 8.5</option><option value="8">B+ - 8</option>
      <option value="7">B - 7</option><option value="6">C+ - 6</option>
      <option value="5.5">C - 5.5</option><option value="5">D - 5</option>
      <option value="0">F - 0</option>
    </select>
    <input type="number" placeholder="Credits" class="credit" value="3">
  `;
  document.getElementById('subjects').appendChild(div);
}

function calculateCGPA() {
  let grades = document.querySelectorAll('.grade');
  let credits = document.querySelectorAll('.credit');
  let totalPoints = 0, totalCredits = 0;

  for(let i=0; i<grades.length; i++) {
    let g = parseFloat(grades[i].value);
    let c = parseFloat(credits[i].value);
    totalPoints += g * c;
    totalCredits += c;
  }

  let cgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById('result').innerHTML = `Your CGPA: <b>${cgpa}</b>`;
  localStorage.setItem('lastCGPA', cgpa);
}

function planTarget() {
  let target = parseFloat(document.getElementById('targetCGPA').value);
  let current = parseFloat(localStorage.getItem('lastCGPA')) || 7.5;
  let needed = ((target * 8) - (current * 4)) / 4; // assuming 4 sems left
  document.getElementById('targetResult').innerText =
    `To reach ${target} CGPA, you need ~${needed.toFixed(2)} in upcoming sems`;
}

function copyResult() {
  let text = document.getElementById('result').innerText;
  navigator.clipboard.writeText(text);
  alert('Copied! Share it 📤');
}