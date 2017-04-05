import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { Carousel} from 'antd-mobile';
import './Slider.less';

/**
 * 生成主题类型小图标
 *
 * @export
 * @class IndexFoot
 * @extends {Component}
 */
export class IndexSlider extends Component {
    render() {

        return (
            <div>
		      <Carousel
		        className="my-carousel" autoplay={false} infinite
		        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		        afterChange={(index) => console.log('slide to', index)}
		      >
		        {['slider03.jpg', 'slider02.jpg', 'slider01.jpg', 'slider03.jpg'].map((ii) => (
		          <a href="#" key={ii}><img src={`/src/Pic/${ii}`} /></a>
		        ))}
		      </Carousel>
		  </div>
        );
    }
}
