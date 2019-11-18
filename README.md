＃LayaAir2.X使用Unity-NavMesh
====
Unity NavMesh导出到LayaAir里，供LayaAir使用
====
概述：
-
在原版李志的开源项目上修改，在这里感谢原作者李志。  
原版开源项目地址：[Mozilla](https://matrix3d.github.io/h5/2019/03/14/layaair-navmesh%E5%AF%BB%E8%B7%AF)  
1.原版的转换工具python文件有几处代码过时，进行了修改  
2.原版的库文件直接在LayaAir2.X中引用与LayaAir的原生引用的库文件 laya.d3.js等冲突，提取了原项目的读取NavMesh数据所用的patrolaya.js、underscore-min.js库文件，
提取了NavMeshAgent有关代码。  
3.修改patrolaya.js报错的代码  

如何使用：
-
1.在Unity中bake navmesh  
2.将NavMeshExport.cs脚本放到Unity项目中，点击状态栏的NavMesh->Export，然后会在工程目录生成一个ExportNavMesh文件夹，里面的文件就是导出的NavMesh模型  
3.这时候需要将导出的obj文件利用转换工具转换成json格式的文件，让Laya读取  
4.转换工具是python文件，需要安装python，python环境下载地址：[Mozilla](https://www.python.org/downloads/)  
5.在转换工具所在位置按住shift键右键 在此处打开powershell窗口 ，输入python 转换工具名字.py -i xx.obj -o xx.js 回车。详细请看转换工具代码。   
6.项目使用的脚本，src文件夹下NavMesh文件夹；bin文件夹下meshs文件夹放navmesh转换后的json文件；bin文件夹下放patrolaya.js、underscore-min.js库文件；修改
index.html，增加<script src="underscore-min.js"></script>  <script src="patrollaya.js"></script>；  
7.NavTest脚本需要挂载到scene上。
