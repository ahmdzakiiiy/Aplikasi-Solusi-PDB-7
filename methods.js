function taylorMethod(equation, y0, h, steps) {
  const f = (t, y) => eval(equation);
  let y = y0;
  let results = [[0, y0]];

  for (let i = 1; i <= steps; i++) {
      const t = i * h;
      const y1 = f(t - h, y);
      const y2 = eval(equation.replace('y', `(${y1})`));
      y = y + h * y1 + (h ** 2 / 2) * y2;
      results.push([t, y]);
  }

  return results;
}

function eulerMethod(equation, y0, h, steps) {
  const f = (t, y) => eval(equation);
  let y = y0;
  let results = [[0, y0]];

  for (let i = 1; i <= steps; i++) {
      const t = i * h;
      y = y + h * f(t - h, y);
      results.push([t, y]);
  }

  return results;
}

function heunMethod(equation, y0, h, steps) {
  const f = (t, y) => eval(equation);
  let y = y0;
  let results = [[0, y0]];

  for (let i = 1; i <= steps; i++) {
      const t = i * h;
      const k1 = f(t - h, y);
      const k2 = f(t, y + h * k1);
      y = y + (h / 2) * (k1 + k2);
      results.push([t, y]);
  }

  return results;
}

function rungeKuttaMethod(equation, y0, h, steps) {
  const f = (t, y) => eval(equation);
  let y = y0;
  let results = [[0, y0]];

  for (let i = 1; i <= steps; i++) {
      const t = i * h;
      const k1 = h * f(t - h, y);
      const k2 = h * f(t - h + h / 2, y + k1 / 2);
      const k3 = h * f(t - h + h / 2, y + k2 / 2);
      const k4 = h * f(t, y + k3);
      y = y + (1 / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
      results.push([t, y]);
  }

  return results;
};
