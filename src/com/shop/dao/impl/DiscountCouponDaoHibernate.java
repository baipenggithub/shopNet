package com.shop.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.shop.dao.DiscountCouponDao;
import com.shop.dao.base.BaseHibernateDaoSupport;
import com.shop.domain.DiscountCoupon;

@Repository("discountCouponDao")
public class DiscountCouponDaoHibernate extends BaseHibernateDaoSupport implements DiscountCouponDao {

	private int pageSize = 10;
	
	/**
	 * 根据标识属性删除DiscountCoupon实例
	 * @param discountCouponId 需要删除DiscountCoupon实例的标识属性值
	 */
	public void delete(String discountCouponId) {
		getHibernateTemplate().delete(get(discountCouponId));
	}

	/**
	 * 删除DiscountCoupon实例
	 * @param discountCoupon 需要被删除的DiscountCoupon实例
	 */
	public void delete(DiscountCoupon discountCoupon) {
		getHibernateTemplate().delete(discountCoupon);
	}

	/**
	 * 根据标识属性获取DiscountCoupon实例
	 * @param discountCouponId 需要被删除的DiscountCoupon实例的标识属性值
	 * @return 指定标识属性值的DiscountCoupon实例
	 */
	public DiscountCoupon get(String discountCouponId) {
		return getHibernateTemplate().get(DiscountCoupon.class,discountCouponId);
	}

	/**
	 * 获取全部的DiscountCoupon实例
	 * @return 数据库中全部的DiscountCoupon实例
	 */
	@SuppressWarnings("unchecked")
	public List<DiscountCoupon> getAllDiscountCoupons() {
		return (List<DiscountCoupon>)getHibernateTemplate().find("from DiscountCoupon");
	}

	/**
	 * 根据用户编号获取DiscountCoupon实例
	 * @param userId 用户编号
	 * @return 指定用户编号
	 */
	@SuppressWarnings("unchecked")
	public List<DiscountCoupon> getDiscountCouponByUserId(String userId,int pageNo) {
		int offset = (pageNo-1)*pageSize;
		return (List<DiscountCoupon>)findByPage("from DiscountCoupon as d where d.users.userId=?", userId, offset, pageNo);
	}

	@Override
	public List<DiscountCoupon> getDiscountCoupon(String userId, int state, int pageNo) {
		return getHibernateTemplate().find("from DiscountCoupon as d where d.users.userId=? and d.discountCouponState=?",userId,state);
	}

	/**
	 * 保存DiscountCoupon实例
	 * @param discountCoupon 需要被保存的DiscountCoupon实例
	 */
	public void save(DiscountCoupon discountCoupon) {
		getHibernateTemplate().save(discountCoupon);
	}

	/**
	 * 修改DiscountCoupon实例
	 * @param discountCoupon 需要被修改的DiscountCoupon实例
	 */
	public void update(DiscountCoupon discountCoupon) {
		getHibernateTemplate().update(discountCoupon);
	}

}
