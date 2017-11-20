import _ from 'lodash';
import './index.css';
import './index.less'
import Cat from './assets/cat.jpg';
import Data from './data/data.xml';

function component() {
  var parent = document.createElement('div');
  parent.classList.add('hello');

  var title = document.createElement('p');
  title.innerHTML = _.join([
    "Hello", 'webpack!', 'Build with configuration file.'
  ], ' ')
  parent.appendChild(title)

  var des = document.createElement('p');
  des.innerHTML = 'Load less';
  des.classList.add('highlight');
  parent.appendChild(des);

  var location = document.createElement('p');
  location.innerHTML = 'Shanghai, China';
  location.classList.add('icon-location2');
  parent.appendChild(location);

  var data = document.createElement('p');
  data.innerHTML = JSON.stringify(Data);
  parent.appendChild(data);

  var img = new Image();
  img.src = Cat;
  parent.appendChild(img);

  return parent;
}

document.body.appendChild(component());
