// app.js

document.addEventListener("DOMContentLoaded", function() {
  // Create root element
  const rootElement = document.getElementById('root');

  // Create the first dynamic section
  const section1 = document.createElement('div');
  section1.className = 'w-90vw h-40vh bgc-D9 display-f align-center justify-space-around';

  const div1_1 = document.createElement('div');
  div1_1.className = 'w-20vw h-35vh bgc-w p-1vw';
  div1_1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis ipsa vero et suscipit aspernatur maxime nam. Autem aspernatur facere cupiditate nulla est saepe dolore a nisi. Fugit, voluptatem. Laboriosam?';

  const div1_2 = document.createElement('div');
  div1_2.className = 'w-60vw h-35vh p-1vw display-f flex-column justify-space-around';

  const h1_1 = document.createElement('h1');
  h1_1.textContent = 'HTML Training 3';

  const p1_1 = document.createElement('p');
  p1_1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, assumenda praesentium obcaecati est consectetur, libero sapiente expedita quisquam sequi qui dolore ex ipsam excepturi fugit nostrum tenetur modi distinctio eligendi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maxime ullam placeat doloremque maiores consequuntur perspiciatis magni ex alias libero! Perspiciatis dolorem vel incidunt voluptatibus, deleniti quia amet distinctio odio.';

  const em1_1 = document.createElement('em');
  em1_1.className = 'fs-2rem color-g';
  em1_1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  // Append elements to the first section
  div1_2.appendChild(h1_1);
  div1_2.appendChild(p1_1);
  div1_2.appendChild(em1_1);

  section1.appendChild(div1_1);
  section1.appendChild(div1_2);

  // Create the second dynamic section
  const section2 = document.createElement('div');
  section2.className = 'w-90vw h-40vh bgc-D9 dl display-f align-center justify-space-around';

  const div2_1 = document.createElement('div');
  div2_1.className = 'w-20vw h-35vh p-1vw';
  div2_1.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus aspernatur eius, laudantium modi fugiat quis possimus. Inventore, placeat labore. Ab sint voluptates dolore blanditiis dignissimos. Autem sunt culpa illum amet.';

  const div2_2 = document.createElement('div');
  div2_2.className = 'w-45vw h-35vh p-1vw';

  const h1_2 = document.createElement('h1');
  h1_2.textContent = 'HTML Training 3';

  const p2_1 = document.createElement('p');
  const span2_1 = document.createElement('span');
  span2_1.className = 'color-r';
  span2_1.textContent = ' Lorem ipsum dolor sit amet, ';
  p2_1.appendChild(span2_1);
  p2_1.textContent += 'consectetur adipisicing elit. Iste voluptates autem non, iure ea magnam sunt veritatis quod delectus ad deserunt sed omnis similique officia eos? Omnis in ipsum dignissimos.';

});