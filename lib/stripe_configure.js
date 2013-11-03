Template.configureLoginServiceDialogForStripe.siteUrl = function () {
	return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForStripe.fields = function () {
  return [
      {property: 'clientId', label: 'API Key'},
      {property: 'secret', label: 'Secret Key'}
  ];
};