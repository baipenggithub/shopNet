<%@ page import="com.opensymphony.xwork2.ActionContext" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/proscenium/indexCategory.css" type="text/css"></link>
</head>
<body>
<div class="indexCategory_title"><span>&nbsp; 商品分类</span></div>
<ul>
    <c:forEach items="${categorys}" var="c" >
    <li class="indexCategory_sneaker">
        <div class="sneaker_title">
            <table>
                <tr>
                    <td align="right" width="30%"><img src="${pageContext.request.contextPath }/images/proscenium/nextPage.jpg"/></td>
                    <td align="left" width="30%" class="flmcTd"><span class="categoryTitle">${c.categoryName}</span></td>
                    <td align="right" class="xytp"><img src="${pageContext.request.contextPath }/images/proscenium/index_category.jpg"/></td>
                </tr>
            </table>
        </div>
        <div class="sneakerDetail">
            <div class="detailLeft">
                <div class="left_style">
                    <div class="style_title">
                        <span>款式</span>
                    </div>
                    <div class="style_content">
                        <table cellpadding="3">
                            <c:forEach items="${c.styles}" var="s">
                                <tr>
                                    <td>
                                        <a href="${pageContext.request.contextPath}/goods/categoryCoods_showGoodsByCategory.action?categoryId=${c.categoryId}&style=${s.styleId}">${s.styleName}</a>
                                    </td>
                                </tr>
                            </c:forEach>
                        </table>
                    </div>
                </div>
                <div class="left_price">
                    <div class="brand_title">
                        <span>热卖品牌</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">更多</a></span>
                    </div>
                    <div class="brand_content">
                        <table cellpadding="3">
                            <c:set var="residue" value="${c.brands.size()%2}"/>
                            <c:set var="trNum" value="${(c.brands.size()-residue)/2+residue}"/>
                             <c:forEach begin="1" end="${trNum}" var="i">
                                 <tr>
                                     <td><img src="${c.brands[i-1].brandImage}" width="80" height="50"/></td>
                                     <c:if test="${residue == 0}">
                                     <td><img src="${c.brands[i].brandImage}" width="80" height="50"/></td>
                                     </c:if>
                                 </tr>
                             </c:forEach>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </li>
    </c:forEach>
</ul>
</body>
</html>
