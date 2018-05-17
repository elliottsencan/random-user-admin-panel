export const myAccountsData = {
  title: 'My accounts',
  data: [
    {
      text: '+1-386-575-1232',
      subtext: 'Available',
      button: {
        display: 'primary',
        text: 'Edit',
        size: 'medium',
        onClick: () => {}
      },
      active: true
    }, {
      text: '+1-844-699-4678',
      subtext: 'Not Available',
      button: {
        onClick: () => {},
        display: 'danger',
        text: 'Delete',
        size: 'medium'
      },
      active: false
    }
  ]
};

export const myBillsData = {
  title: 'My bills',
  data: [
    {
      text: '+1-386-575-1232',
      subtext: 'Patty Francisco',
      button: {
        onClick: () => {},
        display: 'success',
        text: '$192',
        size: 'medium'
      },
      buttonSubtext: 'Bill Paid    ',
      active: true
    }, {
      text: '+1-549-746-1365',
      subtext: 'Jenee Withey',
      button: {
        onClick: () => {},
        display: 'danger',
        text: '$144',
        size: 'medium'
      },
      buttonSubtext: 'Bill not paid',
      active: true
    }
  ]
};