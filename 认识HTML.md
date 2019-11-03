# 认识HTML



请先仔细观察页面中有什么
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190210214627831.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)
我们不难看出，在CSDN的首页中有**文字**、**图片**、**输入框**、以及像[CSDN首页](https://blog.csdn.net/)这样点击可以跳转的**超链接**；
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190210214828155.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190210215011953.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)
当然当我们在浏览一些其他网站时还会看到**音频**和**视频**；

由此我们可以得出一个结论：**网页是由图片、视频、文字、音乐、输入框等等组成的**；

那么怎么去制作这样一个丰富多彩的网页呢

这时呢就需要一种电脑能听懂的语言来实现网页的制作；

![1566639133332](C:\Users\游洋洋\AppData\Roaming\Typora\typora-user-images\1566639133332.png)

HTML 是用来描述网页的一种语言。

- HTML 指的是超文本标记语言 (**H**yper **T**ext **M**arkup **L**anguage)
- HTML 不是一种编程语言，而是一种**标记语言** (markup language)
- 标记语言**：利用文本与文本相关的内容，按照某种规律排序组成的计算机听得懂的语言
- 标记语言是一套*标记标签* (markup tag)
- HTML 使用***标记标签***来描述网页

## HTML 标签

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

- HTML 标签是由*尖括号*包围的关键词，比如 <html>
- HTML 标签通常是*成对出现*的，比如 <b> 和 </b>
- 标签对中的第一个标签是*开始标签*，第二个标签是*结束标签*
- 开始和结束标签也被称为*开放标签*和*闭合标签*

## 

## 告诉电脑【我要做网页】

这一行代码的中文意义就是【**声明文档类型为HTML第5代**】

```html
<!DOCTYPE html>
```

| 符号/文本 | 意义           |
| --------- | -------------- |
| ！        | 声明           |
| DOCTYPE   | 文档类型       |
| HTML      | 超文本标记语言 |

HTML第5代简称HTML5，简单来说就是基于第4代更加便捷、实用。是发布至今最优最全面的一套版本，为此他们一群人大力推广HTML5为HTML的标准语言，然后HTML4就下台了；

并且在书写时**HTML5的5可以省略**，其他HTML版本没这个特权；

**HTML语言不区分字母的大小写**；以下的几种写法都对；

```
<!doctype html>
<!doctype HTML>
<!DoCtYpE HtMl>
```

在此要注意一点的是感叹号必须英文半角输入的

**HTML中不区分字母的大小写**（写一个字母大写一个字母小写都可以，但为了代码的整洁舒适度，**一般都小写输入**）

## HTML中的基本结构

对于html语言，在执行你的命令时，你的命令必须要准守规定，就像英语的语法一样，方便阅读和执行

在这样的要求下，就制定了一套**HTML的规则**或者说的**HTML的语法**；

```html
<!doctype html>
<html>
    <head>

    </head>
    <body>

    </body>
</html>
```

在html中这种   <xxx>  或   </xxx>  的代码，我们一般称之为**标签**

![1566639808106](C:\Users\游洋洋\AppData\Roaming\Typora\typora-user-images\1566639808106.png)

这就是HTML的基本结构/语法； 

<xxxxx>表示xxxxx标签【开始】

</xxxxx>表示xxxxx标签【结束】

**HTML标签**的意义呢就是**表示在HTML中的书写位置的一个大体**；其中呢**HTML标签**又下分为2个具体的书写位置；

**head标签**与**body标签**的主要意义就是把**HTML分割为2部分**，**一部分叫【头】一部分叫【身体】**；

**在书写时一般都会写在这两个部分的中间**；也就是:

```html
<!doctype html>

<html>
    <head>
        在这可以书写head部分的代码
    </head>
    <body>
        在这可以书写body部分的代码
    </body>
</html>
```

在HTML代码中像    `<head></head> , <body></body>`这样带有开始标签与对应的结束标签的，将内容书写至开始标签与对应的结束标签的中间即可生效对应标签中的意义

**如果一段内容被多个标签包括则都会生效这些标签的意义；**

例如；

```html
<!doctype html>
<html>
    <head>
        小黑
    </head>
    <body>
        小白
    </body>
</html>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

在这里呢小黑既被`<html><html>`包裹 、也被`<head></head>`包裹。则小黑获取到的是head标签 和HTML标签的意义。

在这里呢小黑既被`<html><html>`包裹 、也被`<body></body>`包裹。则小黑获取到的是body标签 和HTML标签的意义。

![1566640372054](C:\Users\游洋洋\AppData\Roaming\Typora\typora-user-images\1566640372054.png)

## 写一个小页面

### 1. 首先在任意存储位置右击鼠标新建一个【文本文档】

我这里是在桌面创建的

![img](https://img-blog.csdnimg.cn/20190211140620599.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### 2.  双击运行，使用【记事本】打开

![img](https://img-blog.csdnimg.cn/20190211140750271.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### 3.**声明文档类型为html5**

```html
<!doctype html>
```

![img](https://img-blog.csdnimg.cn/20190211140224593.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### 4.  写出结构

```html
<!doctype html>     -----------------------声明文档类型为html5
<html>              -----------------------HTML标签【开始】
    <head>          ------------------------head标签【开始】
        这里可以写head部分的标签
    </head>         -----------------------head标签【结束】
    <body>          -----------------------body标签【开始】
        这里可以写body部分的标签
    </body>         -----------------------body标签【结束】
</html>             -----------------------HTML标签【结束】
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

![img](https://img-blog.csdnimg.cn/2019021115510474.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### 5. 写出内容

因为我们前面的讲解中提到HTML代码书写在HTML标签中的head标签或body标签中间；

那么我们在head与body中分别写出不同的一段话；

![img](https://img-blog.csdnimg.cn/20190211160450644.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)

### 6. 保存

![img](https://img-blog.csdnimg.cn/20190211160727868.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

在【文件】选项卡中单击【保存】

### 7. 关闭当前记事本

![img](https://img-blog.csdnimg.cn/20190211161008236.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### 8. 鼠标单击选中刚刚编辑完成的【**txt**】文件

![img](https://img-blog.csdnimg.cn/20190211161258303.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### 9. 重命名修改后缀名

将【txt】改为【HTML】或【htm】【html】与【htm】效果一样，不区分大小写；

![img](https://img-blog.csdnimg.cn/2019021116223449.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

![img](https://img-blog.csdnimg.cn/20190211162718119.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

​              ![img](https://img-blog.csdnimg.cn/20190211163352422.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

​                       这时就修改文件拓展名成功了；我们发现这里的图标变了；这个图标的样子是和你的【默认浏览器】的图标相同的；

### 10. 双击使用浏览器打开

![img](https://img-blog.csdnimg.cn/20190211163940592.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

我们的第一个简易网页就写好了

## 标签的嵌套与并列关系

### 嵌套关系 /父子关系

```html
<!doctype html>
<html>
    <head>
        小黑
    </head>
    <body>
        小白
    </body>
</html>
```

之前讲解过：

![img](https://img-blog.csdnimg.cn/20190212202217671.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

小黑与head标签的关系是：【小黑在里面，head标签在  *外面*  】【小黑在head标签  *里面*  】；

这样的关系我们通常会简明得说为；

`小黑与head标签之间是【嵌套关系】；小黑【嵌套】在head标签里   `

在【**嵌套关系**】中；就像是***父亲与儿子一样***；

里面元素 是外边元素的子元素；外面元素是 里面元素 的父元素；

 小    黑    是head标签的子元素；head标签是   小   黑   的父元素；

**head标签**是**小黑**的**父元素**；**HTML标签**也是**小黑**的**父元素**；

![img](https://img-blog.csdnimg.cn/20190212203747439.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

小黑既是head部分；也是HTML部分；小黑既拥有head标签的意义；也拥有HTML标签的意义；

标签意义也被称为属性；小黑既拥有head标签的属性；也拥有HTML标签的属性；

**所以：子元素继承所有父元素的属性**；

总结：

1. 两个元素，一个元素被另一个元素  包  括  ；那么他们两个之间的关系就是【嵌套关系】
2.  在【嵌套关系】中；里面元素是外边元素的子元素；外面元素是里面元素的父元素
3. 子元素继承所有父元素的属性

###  并列关系/兄弟关系

```html
<!doctype html>
<html>
    <head>
        小黑
    </head>
    <body>
        小白
    </body>
</html>
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

![img](https://img-blog.csdnimg.cn/20190212203747439.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY0NzkzOQ==,size_16,color_FFFFFF,t_70)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

在这里我们看到**head标签**与**body标签**，他俩是平级的；**就像是兄弟姐妹一样**；

那么我们就称head标签与body标签是【**并列关系**】

## 认识标签

### **1.**     **基础标签**

 

|     **标签**      | **描述**         |
| :---------------: | ---------------- |
|  <!DOCTYPE html>  | 定义文档类型。   |
|      <head>       | 定义 HTML 文档。 |
|      <title>      | 定义文档的标题。 |
|      <body>       | 定义文档的主体。 |
|   <h1> to <h6>    | 定义 HTML 标题。 |
|        <p>        | 定义段落。       |
|      `<br/>`      | 定义简单的折行。 |
|       <hr>        | 定义水平线。     |
| <!--   ...    --> | 定义注释。       |

 

### **2.**     **格式标签**

| **标签**  | **描述**                                           |
| :-------: | :------------------------------------------------- |
| <acronym> | 定义只取首字母的缩写。                             |
|  <abbr>   | 定义缩写。                                         |
| <address> | 定义文档作者或拥有者的联系信息。                   |
|    <b>    | 定义粗体文本。                                     |
|   <bdi>   | 定义文本的文本方向，使其脱离其周围文本的方向设置。 |

| <bdo>        | 定义文字方向。                           |
| ------------ | ---------------------------------------- |
| <big>        | 定义大号文本。                           |
| <blockquote> | 定义长的引用。                           |
| <center>     | 不赞成使用。定义居中文本。               |
| <cite>       | 定义引用(citation)。                     |
| <code>       | 定义计算机代码文本。                     |
| <del>        | 定义被删除文本。                         |
| <dfn>        | 定义定义项目。                           |
| <em>         | 定义强调文本。                           |
| <font>       | 不赞成使用。定义文本的字体、尺寸和颜色   |
| <i>          | 定义斜体文本。                           |
| <ins>        | 定义被插入文本。                         |
| <kbd>        | 定义键盘文本。                           |
| <mark>       | 定义有记号的文本。                       |
| <menter>     | 定义预定义范围内的度量。                 |
| <pre>        | 定义预格式文本。                         |
| <progress>   | 定义任何类型的任务的进度。               |
| <q>          | 定义短的引用。                           |
| <rp>         | 定义若浏览器不支持 ruby 元素显示的内容。 |
| <rt>         | 定义 ruby 注释的解释。                   |
| <ruby>       | 定义 ruby 注释。                         |
| <s>          | 不赞成使用。定义加删除线的文本。         |

| <samp>   | 定义计算机代码样本。           |
| -------- | ------------------------------ |
| <small>  | 定义小号文本。                 |
| <strike> | 不赞成使用。定义加删除线文本。 |
| <strong> | 定义语气更为强烈的强调文本。   |
| <sup>    | 定义上标文本。                 |
| <sub>    | 定义下标文本。                 |
| <time>   | 定义日期/时间。                |
| <tt>     | 定义打字机文本。               |
| <u>      | 不赞成使用。定义下划线文本。   |
| <var>    | 定义文本的变量部分。           |
| <wbr>    | 定义视频。                     |

### **3.     表单标签**

| 标签       | 描述                           |
| ---------- | ------------------------------ |
| <from>     | 定义供用户输入的 HTML 表单。   |
| <input>    | 定义输入控件。                 |
| <textarea> | 定义多行的文本输入控件。       |
| <buttom>   | 定义按钮。                     |
| <select>   | 定义选择列表（下拉列表）。     |
| <optgroup> | 定义选择列表中相关选项的组合。 |
| <option>   | 定义选择列表中的选项。         |
| <label>    | 定义 input 元素的标注。        |

| <fiedldset> | 定义围绕表单中元素的边框。               |
| ----------- | ---------------------------------------- |
| <legend>    | 定义 fieldset 元素的标题。               |
| <isindex>   | 不赞成使用。定义与文档相关的可搜索索引。 |
| <datalist>  | 定义下拉列表。                           |
| <keygen>    | 定义生成密钥。                           |
| <output>    | 定义输出的一些类型。                     |

### **4.     框架标签**

| 标签       | 描述                                 |
| ---------- | ------------------------------------ |
| <frame>    | 定义框架集的窗口或框架。             |
| <frameset> | 定义框架集。                         |
| <noframes> | 定义针对不支持框架的用户的替代内容。 |
| <iframe>   | 定义内联框架。                       |

### **5.     图像标签**

| 标签         | 描述                                 |
| ------------ | ------------------------------------ |
| <img>        | 定义图像。                           |
| <map>        | 定义图像映射。                       |
| <area>       | 定义图像地图内部的区域。             |
| <canvas>     | 定义图形。                           |
| <figcaption> | 定义 figure 元素的标题。             |
| <figure>     | 定义媒介内容的分组，以及它们的标题。 |

### **6.     音频/视频标签**

| 标签     | 描述                             |
| -------- | -------------------------------- |
| <audio>  | 定义声音内容。                   |
| <souece> | 定义媒介源。                     |
| <track>  | 定义用在媒体播放器中的文本轨道。 |
| <video>  | 定义视频。                       |

### **7.     链接标签**

| 标签   | 描述                       |
| ------ | -------------------------- |
| <a>    | 定义锚。                   |
| <link> | 定义文档与外部资源的关系。 |
| <nav>  | 定义导航链接。             |

### **8.     列表标签** 

| 标签  | 描述                       |
| ----- | -------------------------- |
| <ul>  | 定义无序列表。             |
| <ol>  | 定义有序列表。             |
| <li>  | 定义列表的项目。           |
| <dir> | 不赞成使用。定义目录列表。 |
| <dl>  | 定义定义列表。             |
| <dt>  | 定义定义列表中的项目。     |
| <dd>  | 定义定义列表中项目的描述。 |

| <menu>     | 定义命令的菜单/列表。                       |
| ---------- | ------------------------------------------- |
| <menuitem> | 定义用户可以从弹出菜单调用的命令/菜单项目。 |
| <command>  | 定义命令按钮。                              |

### **9.     表格标签**

| 标签       | 描述                             |
| ---------- | -------------------------------- |
| <table>    | 定义表格                         |
| <caption>  | 定义表格标题。                   |
| <th>       | 定义表格中的表头单元格。         |
| <tr>       | 定义表格中的行。                 |
| <td>       | 定义表格中的单元。               |
| <thead>    | 定义表格中的表头内容。           |
| <tbody>    | 定义表格中的主体内容。           |
| <tfoot>    | 定义表格中的表注内容（脚注）。   |
| <col>      | 定义表格中一个或多个列的属性值。 |
| <colgroup> | 定义表格中供格式化的列组。       |

### **10.     样式/节标签**

| 标签    | 描述                 |
| ------- | -------------------- |
| <style> | 定义文档的样式信息。 |
| <div>   | 定义文档中的节。     |
| <span>  | 定义文档中的节。     |

| <header>  | 定义 section 或 page 的页眉。     |
| --------- | --------------------------------- |
| <footer>  | 定义 section 或 page 的页脚。     |
| <section> | 定义 section。                    |
| <article> | 定义文章。                        |
| <aside>   | 定义页面内容之外的内容。          |
| <details> | 定义元素的细节。                  |
| <dialog>  | 定义对话框或窗口。                |
| <summary> | 为 <details> 元素定义可见的标题。 |

### **11.     元信息标签**

| 标签       | 描述                                               |
| ---------- | -------------------------------------------------- |
| <head>     | 定义关于文档的信息。                               |
| <meta>     | 定义关于 HTML 文档的元信息。                       |
| <base>     | 定义页面中所有链接的默认地址或默认目标。           |
| <basefont> | 不赞成使用。定义页面中文本的默认字体、颜色或尺寸。 |

### **12.     编程标签**

| 标签       | 描述                                       |
| ---------- | ------------------------------------------ |
| <script>   | 定义客户端脚本。                           |
| <noscript> | 定义针对不支持客户端脚本的用户的替代内容。 |
| <applet>   | 不赞成使用。定义嵌入的 applet。            |
| <embed>    | 为外部应用程序（非 HTML）定义容器。        |

| <object> | 定义嵌入的对象。 |
| -------- | ---------------- |
| <param>  | 定义对象的参数。 |

## head中的内容

#### 1  关键字

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image002.jpg)

#### 2  网页描述

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image004.jpg)

#### 3  网页重定向

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image006.jpg)

#### 4  链接外部样式表

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image007.png)

#### 5  设置icon图标

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image008.png)

##  常用标签属性

### １. 图片标签

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

Src    图片的来源   必写属性

Alt    替换文本    图片不显示的时候显示的文字

Title   提示文本    鼠标放到图片上显示的文字

Width  图片宽度

Height  图片高度

◆图片没有定义宽高的时候，图片按照百分之百比例显示，如果只更改图片的宽度或者高度，图片等比例缩放。

### 2.路径

#### ２.1  相对路径

相对于文件自身出发，就是相对路径。

◆文件和图片（html文档）在同一个目录(文件夹) ，直接写文件名。

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)

 

◆图片（html文档）在文件在下一级目录里。文件夹名称+/+图片（html）名称

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image005.png)

◆图片（html）在文件的上一级目录里，..+/+图片（html）名称

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image006.png)

◆图片在文件的上一级的其他目录里，../文件夹名称/图片名称

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image007.png)

★总结：找到下一级目录（文件夹）的图片（文件）用 /

​        跳出当前目录使用../

#### ２.2  绝对路径

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image009.jpg)

### ３   超链接

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image011.jpg)

href   去往的路径（跳转的页面） 必写属性

title    提示文本   鼠标放到链接上显示的文字

target=”_self”    默认值    在自身页面打开（关闭自身页面，打开链接页面）  

Target=”_blank”   打开新页面 （自身页面不关闭，打开一个新的链接页面）

#### ３.1  锚链接

1.先定义一个锚点

​    ![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image012.png)

2.超链接到锚点

   ![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image013.png)

#### ３.2  空链  不知道链接到那个页面的时候，用空链

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image014.png)

#### ３.3  压缩文件下载  不推荐使用![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image015.png)

#### ３.4  超链接优化写法  <base target="_blank">   让所有的超链接都在新窗口打开

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image016.png)

### 4   列表

#### 4.1  无序列表

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image018.png)

type=”square”      小方块

Type=”disc”       实心小圆圈

Type=”circle”      空心小圆圈

#### 4.2  有序列表

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image019.png)

◆type=”1,a,A,i,I” type的值可以为1,a,A,i,I

start=”3”  决定了开始的位置。

### 4.3  自定义列表



![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image020.png)

### 5   音乐标签

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image021.png)

### 6   表格

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image002.jpg)

◆属性：

Border=”1”   边框

Width=”500”  宽度

Height=”300” 高

cellspacing=”2”    单元格与单元格的距离

cellpadding=”2”    内容距边框的距离

align=”left  |  right  |  center”  

如果直接给表格用align=”center”  表格居中

如果给tr或者td使用   ，tr或者td内容居中。

bgcolor=”red”    背景颜色。

#### 6.1  表头和单元格合并

◆  表头  <caption></caption>

colspan=”2”  合并同一行上的单元格

rowspan=”2”  合并同一列上的单元格

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image004.jpg)

#### 6.2  表格标题、边框颜色、内容垂直对齐

◆表格标题 <th></th>用法和td一样

标题的文字自动加粗水平居中对齐

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image005.png)

◆边框颜色

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image006.png)

◆内容垂直对齐方式

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image007.png)

Valign=”top   |  middle   |  bottom”

## 7   表单

###           表单的作用是收集信息。

表单的组成

◆提示信息

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image009.jpg)

◆表单控件

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image011.jpg)

◆表单域

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image012.png)

属性：action:处理信息

Method=”get | post”   

Get通过地址栏提供（传输）信息，安全性差。

Post 通过1.php来处理信息，安全性高。

◆文本输入框

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image014.jpg)

maxlength="6"    限制输入字符长度

readonly=”readonly”  将输入框设置为只读状态（不能编辑）

disabled="disabled"  输入框未激活状态

name="username"   输入框的名称

value="大前端"     将输入框的内容传给处理文件

◆密码输入框

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image015.png)

★注意：文本输入框的所有属性对密码输入框都有效。

◆单选框

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image017.jpg)

★只有将name的值设置相同的时候，才能实现单选效果。

★checked=”checked” 设置默认选择项。

◆下拉列表

<select>

<option>下拉列表选项</option>

<option>下拉列表选项</option>

</select>

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image018.png)

属性：

Multiple=”multiple”  将下拉列表设置为多选项

Selected=”selected”  设置默认选中项目

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image019.png)

<optgroup></optgroup>   对下拉列表进行分组。

Label=””  分组名称。

◆多选框

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image020.png)

Checked=”checked” 设置默认选中项

◆多行文本框

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image021.png)

Cols  控制输入字符的长度。

Rows  控制输入的行数

◆ 文件上传控件

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image022.png)

◆文件提交按钮

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image023.png)

★：可以实现信息提交功能

◆普通按钮

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image024.png)

★不能提交信息，配合JS使用。

◆图片按钮

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image025.png)

★图片按钮可实现信息提交功能

◆重置按钮

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image026.png)

★将信息重置到默认状态

◆表单信息分组

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image027.png)

<fieldset></fieldset>    对表单信息分组

<legend></legend>      表单信息分组名称
 html5补充表单控件

![img](file:///C:/Users/游洋洋/AppData/Local/Packages/oice_16_974fa576_32c1d314_2718/AC/Temp/msohtmlclip1/01/clip_image028.png)

## ８   滚动

![img](file:///C:/Users/游洋洋/AppData/Local/Temp/msohtmlclip1/01/clip_image022.png)







