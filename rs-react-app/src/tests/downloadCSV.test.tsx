import { downloadCSV } from '../utils/downloadCSV';

describe('downloadCSV', () => {
  const clickMock = vi.fn();

  const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValue({
    href: '',
    download: '',
    click: clickMock,
  } as unknown as HTMLAnchorElement);

  if (!global.URL) {
    global.URL = {
      createObjectURL: vi.fn().mockReturnValue('blob:mock'),
      revokeObjectURL: vi.fn(),
      canParse: vi.fn(),
      parse: vi.fn(),
      prototype: {},
    } as unknown as typeof URL;
  }
  if (!global.URL.createObjectURL) {
    global.URL.createObjectURL = vi.fn().mockReturnValue('blob:mock');
  }
  if (!global.URL.revokeObjectURL) {
    global.URL.revokeObjectURL = vi.fn();
  }

  const createObjectURLSpy = vi
    .spyOn(global.URL, 'createObjectURL')
    .mockReturnValue('blob:mock');
  const revokeObjectURLSpy = vi
    .spyOn(global.URL, 'revokeObjectURL')
    .mockImplementation(() => {});

  it('should generate CSV and trigger download', () => {
    const data = [
      { name: 'Item 1', url: 'url1' },
      { name: 'Item 2', url: 'url2' },
    ];
    const length = data.length;

    downloadCSV(data, `${length}_items.csv`);

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(createObjectURLSpy).toHaveBeenCalled();
    expect(clickMock).toHaveBeenCalled();
    expect(revokeObjectURLSpy).toHaveBeenCalledWith('blob:mock');
  });
});
