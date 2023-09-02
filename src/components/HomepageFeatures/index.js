import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [{
        title: '简单易懂',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: ( <
            >
            文档通过精炼的语言并且搭配游戏内图片<br/>让社会模拟职业及楼层介绍通俗易懂！<
            />
        ),
    },
    {
        title: '无需登录',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: ( <
            >
            网页版帮助文档<br/>打开即看，方便快捷<
            />
        ),
    },
    {
        title: '轻量极速',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: ( <
            >
            采用React+Docusaurus搭建<br/>文档轻量，极速加载响应<
            />
        ),
    },
];

function Feature({ Svg, title, description }) {
    return ( <
        div className = { clsx('col col--4') } >
        <
        div className = "text--center" >
        <
        Svg className = { styles.featureSvg }
        role = "img" / >
        <
        /div> <
        div className = "text--center padding-horiz--md" >
        <
        h3 > { title } < /h3> <
        p > { description } < /p> <
        /div> <
        /div>
    );
}

export default function HomepageFeatures() {
    return ( <
        section className = { styles.features } >
        <
        div className = "container" >
        <
        div className = "row" > {
            FeatureList.map((props, idx) => ( <
                Feature key = { idx } {...props }
                />
            ))
        } <
        /div> <
        /div> <
        /section>
    );
}