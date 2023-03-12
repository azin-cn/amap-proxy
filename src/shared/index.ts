export class ResultVO {
  constructor(
    private code?: number,
    private data?: any,
    private msg?: string,
  ) {}

  public setCode(code: number) {
    this.code = code;
  }
  public setMsg(msg: string) {
    this.msg = msg;
  }
  public setData(data: any) {
    this.data = data;
  }
}
