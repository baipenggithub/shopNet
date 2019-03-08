<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
  <head>
  	<title>会员管理中心</title>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/proscenium/layout.css" type="text/css"></link>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/proscenium/userCenterLayout.css" type="text/css"></link>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/css/proscenium/checkEmail.css" type="text/css"></link>
  	<script type="text/javascript" src="${pageContext.request.contextPath }/js/jQuery/jquery-1.7.2.js"></script>
  	<script type="text/javascript" src="${pageContext.request.contextPath }/js/proscenium/checkEmail.js" charset="UTF-8"></script>
  </head>
  
  <body>
    <div id="top">
    	<jsp:include page="/WEB-INF/page/proscenium/index_top.jsp" />
    </div>
    <div id="main">
    	<div class="content">
    		<div class="content_left">
    			<jsp:include page="/WEB-INF/page/proscenium/user/userCenterNavigation.jsp" />
    		</div>
    		<div class="content_right">
    			<div class="checkEmail_title">
    				<span>修改邮箱</span>
    			</div>
    			<div class="checkEmail_content">
    				<div class="content_top">
    					<ul>
    						<li><img src="${pageContext.request.contextPath }/images/proscenium/updateEmail_21.jpg"/></li>
    						<li><img src="${pageContext.request.contextPath }/images/proscenium/updateEmail_22.jpg"/></li>
    						<li><img src="${pageContext.request.contextPath }/images/proscenium/updateEmail_23.jpg"/></li>
    					</ul>
    				</div>
    				<div class="content_main">
    					<form action="${pageContext.request.contextPath }/userCenter/safeCenter_updateSendEmail.action" method="post" id="inputMailForm">
    						<table border="0" cellpadding="5">
    							<tr>
    								<td align="right">我的邮箱:</td>
    								<td ><input type="text" name="email"/></td>
    								<td><div class="email_prompt"></div></td>
    							</tr>
    							<tr>
    								<td></td>
    								<td><input type="image" src="${pageContext.request.contextPath }/images/proscenium/checkEmailtijiao.jpg"/></td>
    								<td></td>
    							</tr>
    						</table>
    					</form>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div id="bottom">
    	<jsp:include page="/WEB-INF/page/proscenium/index_bottom.jsp" />
    </div>
  </body>
</html>
