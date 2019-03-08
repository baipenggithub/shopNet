package com.shop.dao;

import java.util.List;

import com.shop.domain.Brand;

public interface BrandDao {
	/**
	 * ���ݱ�ʶ���Ի�ȡBrandʵ��
	 * @param brandId
	 * @return
	 */
	Brand get(String brandId);
	
	/**
	 * ����Brandʵ��
	 * @param brand
	 */
	void save(Brand brand);
	
	/**
	 * �޸�Brandʵ��
	 * @param brand
	 */
	void update(Brand brand);
	
	/**
	 * ɾ��Branʵ��
	 * @param brand
	 */
	void delete(Brand brand);
	
	/**
	 * ��������ɾ��Brandʵ��
	 * @param brandId ��Ҫ��ɾ����Ʒ�Ʊ��
	 */
	void delete(String brandId);
	
	/**
	 * ��ȡȫ����Brandʵ��
	 * @return 
	 */
	List<Brand> getAllBrand();

	/**
	 * ��ȡָ��ҳ���ȫ��Brandʵ��
	 * @param pageNo ҳ��
	 * @param pageSize ҳ���С
	 * @return
	 */
	List<Brand> getAllBrand(int pageNo, int pageSize);

	/**
	 * ��ȡƷ�Ƶ�����
	 * @return
	 */
	long getBrandCount();

	/**
	 * ����Ʒ�����ƻ�ȡƷ��ʵ��
	 * @param brandName Ʒ������
	 * @return
	 */
	Brand getBrandByName(String brandName);

	/**
	 * ���ݿ�ʽ��ȡƷ��
	 * @param styleId ��ʽ���
	 * @return
	 */
	List<Brand> getBrandByStyleId(String styleId);

	/**
	 * ��ȡָ��������Ʒ��
	 * @param count ����
	 * @return
	 */
	List<Brand> getBrand(int count);

	/**
	 * ��ȡĳ����ĸ�������ֿ�ͷ��Ʒ��
	 * @param hql sql���
	 * @return
	 */
	List<Brand> getBrandsBypytb(String hql);

	/**
	 * ȡ������ŵ�Ʒ��
	 * @return
	 */
	Brand getMaxIdBrand();

	/**
	 * ����Ʒ��ƴ����ȡ Ʒ��ʵ��
	 * @param brandS Ʒ��ƴ��
	 * @return
	 */
	Brand getBrandBySpell(String brandSpell);

	/**
	 * ��������޸�Ʒ��
	 * @param brand Ʒ��ʵ��
	 */
	void saveOrUpdateBrand(Brand brand);
	
}
