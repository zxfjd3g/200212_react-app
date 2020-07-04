## 使用create-react-app创建项目
	全局下载脚手架: npm install -g create-react-app
	创建项目: create-react-app react-app
	开发运行: yarn start

	 PWA ==> 离线还可访问 ==> 要求是生产环境打包运行有效果
	<React.StrictMode> ==> 在react严格模式下自动检查react一些语法 ===> 开发环境有效
	组件中引入项目内部图片, 必须先import进来后, 再使用

## 使用antd
	在create-react-app创建的项目中来引入antd
	基本配置使用
		下载antd: yarn add antd
		引入需要使用组件进行使用: import {Button} from 'antd'
		引入antd的css样式: import 'antd/dist/antd.css'
	修改react脚手架项目的配置:
		1) 利用react-app-rewired工具包提供的配置和工具来修改
			config-overrides.js
			react-app-rewired提供了很多修改配置的工具函数
		2). 将脚手架项目的配置暴露出来后修改
			npm run eject
			
	高级配置使用(参照课件文档实现)
		按需引入打包
		自定义主题样式
		添加路径别名: @   
		  addWebpackAlias({
		    '@': path.resolve(__dirname, "src")
		  }),
		
## redux理解
	用来管理多个组件共享状态的工具包/库
	它不是react的插件, 但一般与react配合使用

## redux的基本使用
	redux
		store: 对象 ===> 内部管理reducer函数和state数据
			getState(): 用于得到内部状态数据
			dispatch(action对象): 称为分发action ==> 触发reducer调用产生新的state数据
			subscribe(listener): 监视store内部state数据的改变  ==> 用于在回调中更新组件
		reducer: 函数 ==> 接收当前的state数据和指定的action对象来计算产生一个新的state数据
		actions: 工厂函数 ==> 用于产生action对象
		action-types: 包含action对象的type名称常量
	index
		引入store对象, 传递给App
	App.jsx
		得到store对象就可以读取其状态数据或更新基状态数据
		读取状态数据显示: this.props.store.getState()
		更新状态数据: this.props.store.dispatch(调用action acreator函数返回action对象)
	问题:
		1)redux与react组件的代码耦合度太高: 直接在组件中使用了store
		2)编码不够简洁

## 使用react-redux
	作用: 专门用来简化react应用中使用redux的react插件
	下载: yarn add react-redux
	使用 Provider
		<Provider store={store}><App/></Provider>
		作用: 向基所有任意层级的后后代容器组件提供store
	使用connect
		connect(
			state => ({ // 将对象中的所有属性传递给UI组件App(一般属性), 属性值从store中的state中读取
				count: state
			}),

			dispatch => ({ // 将对象中的所有函数传递给UI组件App(函数属性), 一旦执行函数就会dispatch()更新store的state
				increment: number => dispatch(increment(number)),
				decrement: number => dispatch(decrement(number)),
			})
		)(App)		

		connect(
			state => ({
				count: state
			}),

			{
				increment, // 内部传递给App是: increment: (...args) => dispatch(increment(...args))   参数透传
				decrement // 内部传递给App是: decrement: (...args) => dispatch(decrement(...args))
			}
		)(App)	

	区别容器组件与UI组件
		UI组件
			主要做界面显示, 不直接与redux(store)通信, 不直接使用任何redux相关API
			通过接收一般属性得到store中的状态数据显示
			通过接收函数属性, 内部调用它来更新store中的状态数据==> 更新组件
		容器组件
			通过connect产生的组件: connect()(UI组件) 返回的是容器组件
			是redux与UI组件之间进行通信的桥梁(连接者):  
			负责向UI组件传递一般属性, 属性值从state中读取
			负责向UI组件传递函数属性, 函数内部调用dispatch()==>reducer调用 ==> 产生新状态数据 ==> 更新组件
				<ContainerCom>
					<UICom count={}  increment={} decrement={}/>
				</ContainerCom>
			
		高阶函数:
			接收的参数是函数
			返回值是函数
		高阶组件:
			一个特别的高阶函数: 接收的参数是组件, 且返回的也是组件
		connect就是高阶函数, 但不是高阶组件
		connect函数返回的函数才是高阶组件
		注意: 交流时常说: connect高阶组件
		connect()(App)


arr.reduce(reducer, {})


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
	25---使用react脚手架创建项目并打包运行
	26---引入antd使用并实现按需打包与自定义主题样式
	27---counter_react版本
	28---counter_redux版本
	29---counter_react-redux版本