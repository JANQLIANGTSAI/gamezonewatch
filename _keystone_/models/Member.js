var keystone = require('keystone');
var Types = keystone.Field.Types;


var picStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('public/images/uploads'), // required; path where the files should be stored
  	publicPath: '/public/images/uploads', // path where files will be served
	}
});


/**
 * Member Model
 * ==========
 */
var Member = new keystone.List('Member');

Member.add({
	groupId: { type: Types.Text, initial: true, required: true, index: true },
	pictureFn: { type: Types.File, storage: picStorage },
	cardId: { type: Types.Text, initial: true, required: true, unique: true, index: true },
	isParent: { type: Types.Boolean, initial: true, required: true },
	createdAt: { type: Types.Datetime, default: Date.now },
  updatedAt: { type: Types.Datetime, default: Date.now },
	statusIn: { type: Types.Boolean, initial: true, required: true }
});

/**
 * Registration
 */
Member.defaultColumns = 'groupId, pictureFn, cardId, isParent, statusIn';
Member.defaultSort = '-groupId';
Member.register();
