function calculate() {
  const equation = document.getElementById('equation').value;
  const y0 = parseFloat(document.getElementById('initial-condition').value);
  const h = parseFloat(document.getElementById('step-size').value);
  const steps = parseInt(document.getElementById('steps').value);

  const taylorResults = taylorMethod(equation, y0, h, steps);
  const eulerResults = eulerMethod(equation, y0, h, steps);
  const heunResults = heunMethod(equation, y0, h, steps);
  const rungeKuttaResults = rungeKuttaMethod(equation, y0, h, steps);

  displayResults(taylorResults, eulerResults, heunResults, rungeKuttaResults);
}

function displayResults(taylor, euler, heun, rungeKutta) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  const createTable = (title, data) => {
      const table = document.createElement('table');
      const caption = document.createElement('caption');
      caption.textContent = title;
      table.appendChild(caption);

      const header = document.createElement('tr');
      header.innerHTML = '<th>t</th><th>y</th>';
      table.appendChild(header);

      data.forEach(([t, y]) => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${t.toFixed(2)}</td><td>${y.toFixed(5)}</td>`;
          table.appendChild(row);
      });

      return table;
  };

  resultsDiv.appendChild(createTable('Euler Method', euler));
  resultsDiv.appendChild(createTable('Heun Method', heun));
  resultsDiv.appendChild(createTable('Taylor Method', taylor));
  resultsDiv.appendChild(createTable('Runge-Kutta Method', rungeKutta));
}
