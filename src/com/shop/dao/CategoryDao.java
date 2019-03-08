package com.shop.dao;

import java.util.List;

import com.shop.domain.Category;

public interface CategoryDao {
	/**
	 * ���ݱ�ʶ���Ի�ȡCategoryʵ��
	 * @param categoryId ��Ҫ��ȡ�ķ���ʵ����
	 * @return
	 */
	Category get(String categoryId);
	
	/**
	 * ��������޸�Categoryʵ��
	 * @param category ��Ҫ�������categoryʵ��
	 */
	void saveOrUpdateCategory(Category category);
	
	/**
	 * ���ݱ�ʶ����ɾ��Categoryʵ��
	 * @param categoryId ��Ҫ��ɾ����categoryʵ����
	 */
	void delete(String categoryId);
	
	/**
	 * ɾ��Categoryʵ��
	 * @param category ��Ҫɾ����categoryʵ��
	 */
	void delte(Category category);

	/**
	 * ��ȡȫ����Categoryʵ��
	 * @return
	 */
	List<Category> getAllCategory();

	/**
	 * ��ȡ����������
	 * @return
	 */
	Category getEndCategory();

	/**
	 * ����Ʒ�����ƻ�ȡ��Ӧ��Ʒ��
	 * @param categoryName  Ʒ������
	 * @return
	 */
	Category getCategoryByName(String categoryName);
}
