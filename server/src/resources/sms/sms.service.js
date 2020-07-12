import smsModel from "./sms.model";

export default {
  async addSms(sms) {
    return await smsModel.create(sms);
  },

  async editSms(id,sms) {
    return await smsModel.findOneAndUpdate({id},sms,{new:true});
  },

  async deleteSms(id) {
    return await smsModel.findOneAndRemove({id});
  },

  async getAllSms(sortBy,filter={}) {
    return await smsModel.find(filter).sort(sortBy);
  },

  async getSmsById(id) {
    return await smsModel.findOne({id});
  },

};
