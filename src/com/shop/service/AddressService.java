package com.shop.service;

import java.util.List;

import com.shop.domain.Address;
import com.shop.domain.Users;

public interface AddressService {

	/**
	 * ��ȡ�û����ջ���ַ
	 * @param userId �û����
	 * @return
	 */
	List<Address> getAddressByUser(String userId);

	/**
	 * �����ַ��Ϣ
	 * @param address ��Ҫ������ĵ�ַʵ��
	 */
	void save(Address address);

	/**
	 * ɾ����ַ
	 * @param addressId ��Ҫɾ���ĵ�ַʵ��
	 */
	void delete(String addressId);

	/**
	 * ��ȡ�û���Ĭ�ϵ�ַ
	 * @param userId �û����
	 * @return
	 */
	Address getUserDefaultAddress(String userId);

	/**
	 * ���ݵ�ַ��Ż�ȡ��ַ
	 * @param addressId ��ַ���
	 * @return
	 */
	Address getAddressByID(String addressId);

	/**
	 * ��������޸ĵ�ַ
	 * @param address2 ��ַʵ��
	 */
	void saveOrUpdateAddress(Address address2);

	/**
	 * �޸��û��ջ���ַ
	 * @param address1 ��ַʵ��
	 */
	void update(Address address1);

	/**
	 * ��������޸��û���ַ
	 * @param address   ��ַʵ��
	 * @param users  �û�
	 */
	void saveOrUpdateAddress(Address address, Users users);

}
