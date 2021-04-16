type IMixinContext = {
  appVersion?: string;
  immersive?: boolean;
  appearance?: 'dark' | 'light';
  currency?:
    | 'USD'
    | 'CNY'
    | 'JPY'
    | 'EUR'
    | 'KRW'
    | 'HKD'
    | 'GBP'
    | 'AUD'
    | 'SGD'
    | 'MYR';
  locale: string;
  platform: 'iOS' | 'Android' | 'Desktop';
  conversationId: string;
};
const getMixinContext: () => IMixinContext = () => {
  let ctx: any = {};
  if (
    (window as any).webkit &&
    (window as any).webkit.messageHandlers &&
    (window as any).webkit.messageHandlers.MixinContext
  ) {
    ctx = JSON.parse(prompt('MixinContext.getContext()') || '');
    ctx.platform = ctx.platform || 'iOS';
  } else if (
    (window as any).MixinContext &&
    typeof (window as any).MixinContext.getContext === 'function'
  ) {
    ctx = JSON.parse((window as any).MixinContext.getContext());
    ctx.platform = ctx.platform || 'Android';
  }
  ctx.appVersion = ctx.app_version;
  ctx.conversationId = ctx.conversation_id;
  return ctx;
};

export const reloadTheme: () => void = () => {
  const ctx: IMixinContext = getMixinContext();
  switch (ctx.platform) {
    case 'iOS':
      (window as any).webkit &&
        (window as any).webkit.messageHandlers &&
        (window as any).webkit.messageHandlers.reloadTheme &&
        (window as any).webkit.messageHandlers.reloadTheme.postMessage('');
      return;
    case 'Android':
    case 'Desktop':
      (window as any).MixinContext &&
        typeof (window as any).MixinContext.reloadTheme === 'function' &&
        (window as any).MixinContext.reloadTheme();
      return;
  }
};

export const mixinContext = getMixinContext();
