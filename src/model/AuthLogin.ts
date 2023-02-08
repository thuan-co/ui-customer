
export interface Authority {
    authority: string
}

export interface AccountDto{
    username: string,
    name: string,
    authorities: Authority[],
    access_token: string,
    refresh_token: string,
}