import copy from 'copy-to-clipboard';
import { encode as encode64 } from 'js-base64';
import { mixinContext } from './context';

export const shareMixinAppCard = (params: {
  data: {
    action: string;
    app_id: string;
    description: string;
    icon_url: string;
    title: string;
  };
  success?: () => any;
  fail?: () => any;
}) => {
  const { data, success, fail } = params;
  if (mixinContext.platform) {
    location.replace(
      `mixin://send?category=app_card&data=${encodeURIComponent(
        encode64(JSON.stringify(data)),
      )}`,
    );
    success && success();
  } else {
    copy(data.action);
    fail && fail();
  }
};
