## 使用create-react-app创建项目
	全局下载脚手架: npm install -g create-react-app
	创建项目: create-react-app react-app
	开发运行: yarn start

	 PWA ==> 离线还可访问 ==> 要求是生产环境打包运行有效果
	<React.StrictMode> ==> 在react严格模式下自动检查react一些语法 ===> 开发环境有效
	组件中引入项目内部图片, 必须先import进来后, 再使用

## 使用antd
	在create-react-app创建的项目中来引入antd
	下载antd: yarn add antd
	基本配置使用

	高级配置使用
		按需引入打包
		自定义主题样式



## 代码片断
	clg→    console.log(object)

	imp→    import moduleName from 'module'
	imd→    import { destructuredModule } from 'module'
	
	rcc→ 生成类组件
	rfc→ 生成函数组件
	
	sst→    this.setState({ })
	impt→    import PropTypes from 'prop-types'
	ptypes→    static propTypes = {}

## 编码功能列表
    1---React Helloworld
    2---jsx的理解和使用
    3---定义并使用组件
    4---组件三大属性1_state
    5---call&apply&bind理解使用与自定义视频学习
  
	6---组件三大属性2-props
    7---组件三大属性3-refs
    8---事件处理
    9---表单处理: 受控组件与非受控组件
    10---组件对象生命周期函数(勾子)
    11---封装函数处理多个输入框的数据收集
    12---搭建react打包环境
    13---todos练习到初始化动态显示
    
	14---Header组件--添加
    15---Item组件--移入移出效果
    16---Item组件--勾选效果
    17---Item组件--删除
    18---Footer组件
    19---users练习静态组件
    20---users练习动态组件-ajax请求
    21---react路由基本使用
    22---二级路由与封装MyNavLink
    22---向路由组件传递参数(3种)
    22---跳转路由(2种)

    23---根据配置动态生成导航路由链接
    24---根据配置动态生成路由
		