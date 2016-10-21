require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let  imageDatas = 
  	[
			{
				"fileName": "1.jpg",
				"title": "图片1",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "2.jpg",
				"title": "图片2",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "3.jpg",
				"title": "图片3",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "4.jpg",
				"title": "图片4",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "5.jpg",
				"title": "图片5",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "6.jpg",
				"title": "图片6",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "7.jpg",
				"title": "图片7",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "8.jpg",
				"title": "图片8",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "9.jpg",
				"title": "图片9",
				"desc": "很萌的小猫"
			},
			{
				"fileName": "10.jpg",
				"title": "图片10",
				"desc": "很萌的小猫"
			}
		]
imageDatas = function(imageDatasArr){
	for(let i = 0; i < imageDatasArr.length; i++){
		var singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
}(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <div className="stage">
        <section className="img-sec">
        </section>
        <nav  className="controller-nav">
        </nav>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
