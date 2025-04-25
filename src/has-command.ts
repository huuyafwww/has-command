import which from 'which';

export const hasCommand = async (path: string): Promise<boolean> => {
  return !!await which(path, { nothrow: true });
};
