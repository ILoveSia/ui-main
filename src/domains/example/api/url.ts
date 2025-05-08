// ui-main-src-domains-example-api-url.ts

// url의 타입을 호출 시 사용하기 위하여 선언 해준다.
export type TUrl = (typeof url)[keyof typeof url];

// api/url.ts 파일
// search 라는 api를 사용한다고 가정.
const url = {
	SEARCH : '/api/vi/search',
	// REST API 계속 추가...
	DICTIONARY_CODE : '/metadata/rest/dictionary/codes',
} as const;

export default url;