const displayJeffName = () => {
  let jeffTitle = document.getElementById('jeff-title');
  jeffTitle.style.display = 'block';
}

const takeJeffName = () => {
  let jeffTitle = document.getElementById('jeff-title');
  jeffTitle.style.display = 'none';
}

const jeffPic = document.getElementById('dad-pic');
jeffPic.addEventListener('mouseover', displayJeffName);
jeffPic.addEventListener('mouseout', takeJeffName);

const displayNicoleName = () => {
  let nicoleTitle = document.getElementById('nicole-title');
  nicoleTitle.style.display = 'block';
}

const takeNicoleName = () => {
  let nicoleTitle = document.getElementById('nicole-title');
  nicoleTitle.style.display = 'none';
}

const nicolePic = document.getElementById('mom-pic');
nicolePic.addEventListener('mouseover', displayNicoleName);
nicolePic.addEventListener('mouseout', takeNicoleName);

const displayEmilyName = () => {
  let emilyTitle = document.getElementById('emily-title');
  emilyTitle.style.display = 'block';
}

const takeEmilyName = () => {
  let emilyTitle = document.getElementById('emily-title');
  emilyTitle.style.display = 'none';
}

const emilyPic = document.getElementById('emily-id-pic');
emilyPic.addEventListener('mouseover', displayEmilyName);
emilyPic.addEventListener('mouseout', takeEmilyName);
