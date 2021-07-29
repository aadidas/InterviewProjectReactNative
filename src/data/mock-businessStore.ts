import BusinessStore from '@src/stores/BusinessStore';

export type Business = {
  // id: number;
  title: string;
  subTitle: string;
  note: string;
};

export let mockBusiness: Business[] = [
  {
    // id: 1,
    title: 'Enter LUCNCHBOX50',
    subTitle: 'IT',
    note: '50% Off | 11:00PM - 2:00PM',
  },
];

export const updateMockBusiness = (newBusiness: Business) => {
  // let newMockBusiness = [newBusiness, ...mockBusiness];
  BusinessStore.addBusiness(newBusiness);
};

export const deleteMockBusiness = (i: number) => {
  mockBusiness = mockBusiness.splice(i, 1);
  console.log(i);
  console.log(
    'this is after the deletion of a specific element : ',
    mockBusiness,
  );
};
