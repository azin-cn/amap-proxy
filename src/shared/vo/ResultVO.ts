export class ResultVO {
  constructor(
    private data?: any,
    private errMsg?: string,
    private errCode?: number,
  ) {}

  public setCode(code: number) {
    this.errCode = code;
  }
  public setMsg(msg: string) {
    this.errMsg = msg;
  }
  public setData(data: any) {
    this.data = data;
  }
  public static success(data: any = null, code = 200, msg = 'success') {
    return new ResultVO(data, msg, code);
  }
  public static fail(data: any = null, code = 500, msg = 'fail') {
    return new ResultVO(data, msg, code);
  }
}
