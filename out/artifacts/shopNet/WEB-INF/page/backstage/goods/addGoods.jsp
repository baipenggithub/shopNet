<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
  <head>
  	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/backstage/adminRight.css" type="text/css"></link>
  	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/backstage/addGoods.css" type="text/css"></link>
  	<script type="text/javascript" src="${pageContext.request.contextPath }/js/My97DatePicker/WdatePicker.js" ></script>
  	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jQuery/jquery-1.7.2.js"></script>
  	<script type="text/javascript" src="${pageContext.request.contextPath }/js/backstage/goodsManager.js" charset="UTF-8"></script>
  </head>
  <body>
   <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
  	<tr>
    	<td width="17" valign="top" background="${pageContext.request.contextPath }/images/backstage/mail_leftbg.gif"><img src="${pageContext.request.contextPath }/images/backstage/left-top-right.gif" width="17" height="29" /></td>
    	<td valign="top" background="${pageContext.request.contextPath }/images/backstage/content-bg.gif">
    		<table width="100%" height="31" border="0" cellpadding="0" cellspacing="0" class="left_topbg" id="table2">
     			<tr>
        			<td height="31"><div class="titlebt">添加商品</div></td>
      			</tr>
    		</table>
    	</td>
    	<td width="16" valign="top" background="${pageContext.request.contextPath }/images/backstage/mail_rightbg.gif"><img src="${pageContext.request.contextPath }/images/backstage/nav-right-bg.gif" width="16" height="29" /></td>
  </tr>
  <tr height="95%">
  	<td valign="middle" background="${pageContext.request.contextPath }/images/backstage/mail_leftbg.gif">&nbsp;</td>
  	<td valign="top" bgcolor="#F7F8F9">
  		<div id="main_content_top"> 
    			<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;增加商品信息 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    	</div>
     	<div id="main_content">
    		<form action="/goodsManager/goodsManager_addGoodsListing.action" id="addGoodsForm" method="POST" enctype="multipart/form-data">
    			<table id="addGoods">
    				<tr>
    					<td width="15%" align="right">商品编号：</td>
    					<td width="35%">
    					    <input type="text" id="goodsId" class="addGoodsInput" name="goods.goodsId" value="${goodsId }" readonly="readonly"/>
    					</td>
    					<td width="15%" align="right">商品名称：</td>
    					<td width="35%">
    						<input type="text" id="goodsName" class="addGoodsInput" name="goods.goodsName">
    					</td>
    				</tr>
    				<tr>
    					<td align="right">上市时间：</td>
    					<td>
    						<input type="text" class="Wdate" id="goodsMarket" class="addGoodsInput" name="goods.goodsMarket" 
    						       onfocus="WdatePicker({skin:'whyGreen',isShowWeek:true})"/>
    					</td>
    					<td align="right">上架时间：</td>
    					<td>
    						<input type="text" class="Wdate" id="goodsGrounding" class="addGoodsInput" name="goods.goodsGrounding" 
    						        onfocus="WdatePicker({skin:'whyGreen',isShowWeek:true})"/>
    					</td>
    				</tr>
    				<tr>
    					<td align="right">所在仓库：</td>
    					<td>
    						<select id="storage" name="goods.storage.storageId">
    							<option value="-1">--请选择--</option>
    							<c:forEach items="${storages}" var="s">
    								<option value="${s.storageId }">${s.storageName }</option>
    							</c:forEach>
    						</select>
    					</td>
						<td align="right">是否推荐：</td>
						<td>
							<select id="goodsIsRecommend" name="goods.goodsIsRecommend" >
								<option value="-1">--请选择--</option>
								<option value="1">是</option>
								<option value="0">否</option>
							</select>
						</td>
    				</tr>
    				<tr>
    					<td align="right">商品重量：</td>
    					<td>
    						<input type="number" id="goodsWeight" class="addGoodsInput" name="goods.goodsWeight"/>
    					</td>
						<td align="right">商品图片：</td>
						<td>
							<input type="file" id="goodsImage" name="goodsImage" class="addGoodsInput" style="border: 0px;">
						</td>
    				</tr>
    				<tr>
    					<td align="right">进&nbsp;&nbsp;&nbsp;&nbsp;价：</td>
    					<td>
    						<input type="text" id="goodsBid" class="addGoodsInput" name="goods.goodsBid"/>
    					</td>
						<td align="right">市&nbsp;场&nbsp;价：</td>
						<td>
							<input type="text" id="goodsMarketPrice" class="addGoodsInput" name="goods.goodsMarketPrice"/>
						</td>
    				</tr>
    				<tr>
    					<td align="right">商品分类：</td>
    					<td colspan="3">
    						<select id="category" name="goods.category.categoryId">
    							<option value="-1">--请选择--</option>
    							<c:forEach items="${categories}" var="c">
    								<option value="${c.categoryId }">${c.categoryName }</option>
    							</c:forEach>
    						</select>
    						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品款式：
    						<select id="style" name="goods.style.styleId">
    							<option value="-1">--请选择--</option>
    						</select>
    						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品品牌:
    						<select id="brand" name="goods.brand.brandId">
    							<option value="-1">--请选择--</option>
    						</select>
    					</td>
    				</tr>
    				<tr>
    					<td align="center" colspan="4" id="btn">
    						<div id="error_prompt"></div>
    						<input type="image" src="${pageContext.request.contextPath}/images/backstage/addGoods_01.jpg" class="addGoodsBtn"> 
    					</td>
    				</tr>
    			</table>
    			</form>
    		</div>
 	</td>
 	<td background="${pageContext.request.contextPath }/images/backstage/mail_rightbg.gif">&nbsp;</td>
  </tr>
</table>
</body>
</html>
