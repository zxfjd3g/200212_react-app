/* 
自定义项目中所有路由的配置
*/
import ContextTest from '@/pages/01_context'
import FragmentTest from '@/pages/02_fragment'
import OptimizeTest from '@/pages/03_optimize'
import ForwardRefTest from '@/pages/04_forwardRef'
import RenderPropsTest from '@/pages/05_renderProps'
import LazyloadTest from '@/pages/06_lazyload'
import HooksTest from '@/pages/07_hooks'
import HooksDemoTest from '@/pages/07_hooksDemo'

export default [
  {
    path: '/context', 
    component: ContextTest, 
    name: 'Context', 
  },
  {
    path: '/fragement',
    component: FragmentTest, 
    name: 'Fragment', 
  },
  {
    path: '/optimize',
    component: OptimizeTest, 
    name: '组件优化', 
  },
  {
    path: '/forwardref',
    component: ForwardRefTest, 
    name: '函数组件ref', 
  },
  {
    path: '/renderprops',
    component: RenderPropsTest, 
    name: 'props渲染', 
  },
  {
    path: '/lazyload',
    component: LazyloadTest, 
    name: '路由懒加载', 
  },
  {
    path: '/hooks',
    component: HooksTest, 
    name: 'Hooks', 
  },
  {
    path: '/hooksdemo',
    component: HooksDemoTest, 
    name: 'Hooks应用', 
  },
]
 