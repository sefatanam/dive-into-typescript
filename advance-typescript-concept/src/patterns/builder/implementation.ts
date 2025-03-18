class RequestBuilder {
  private method: string;
  private url: string;
  private data: any;
  private headers: any;

  setMethod(method: string): RequestBuilder {
    this.method = method;
    return this;
  }

  setUrl(url: string): RequestBuilder {
    this.url = url;
    return this;
  }

  setData(data: any): RequestBuilder {
    this.data = data;
    return this;
  }

  setHeaders(headers: any): RequestBuilder {
    this.headers = headers;
    return this;
  }

  bouild(): string {
    return JSON.stringify({
      method: this.method,
      url: this.url,
      data: this.data,
      headers: this.headers
    });
  }
}

const dumbRequest = new RequestBuilder();

dumbRequest
  .setMethod('GET')
  .setUrl('https://jsonplaceholder.typicode.com/users')
  .setData(null)
  .setHeaders({ 'Content-Type': 'application/json' })
  .bouild()

console.log(dumbRequest.bouild())
