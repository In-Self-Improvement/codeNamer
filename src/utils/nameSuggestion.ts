export const generateFunctionNameContent = (desc: string): string => {
  return `저는 함수 이름을 짓고 싶어요.
    아래의 규칙을 지켜서 함수 이름을 지어주세요.
    1. 동사로 작성
    나쁜예: apple(), car()
    좋은예: run(), getElement();
    2. Private 메소드라면
    메소드 이름 앞에 언더스코어(_)를 붙여주세요.
    3. 카멜 표기법 준수해주세요.
    4. 첫 글자로 연속된 2개의 언더스코어(__), 달러($) 사용하지 마세요.
    5. Getter, Setter 메소드
    get+ 멤버변수 이름 , set + 멤버변수 이름 형식으로 작성
    단, Getter 메소드의 반환값이 Boolean 인 경우 get 대신 is 조합 사용
    6. 이름은 간결하고 명확하게 작성해주세요. 
    7. 의미가 있는 이름이여야 하고, 의도가 분명해야합니다.
    8. 한 개념에 한 단어를 사용해주세요.
    9. 이름은 영어로 작성해주세요.

    기능은 ${desc} 입니다.
    5개의 이름을 추천해주세요.
    이름 마다 \n 로 구분해주세요.
    이름 앞에 숫자를 붙이지 말아주세요.
    ex) isEven\n isNumber\n ... 
    그 외의 답변은 써주지 마세요.
    `;
};

export const generateVariableNameContent = (desc: string): string => {
  return `저는 변수 이름을 짓고 싶어요.
    아래의 규칙을 지켜서 변수 이름을 지어주세요.
    1. 변수의 이름은 명사로 작성해주세요.
    2. 카멜 표기법 준수해주세요.
    3. 첫 글자로 연속된 2개의 언더스코어(__), 달러($) 사용하지 마세요.
    4. 이름은 간결하고 명확하게 작성해주세요.
    5. 의미가 있는 이름이여야 하고, 의도가 분명해야합니다.
    6. 헝가리안 표기법은 사용하지 말아주세요
    7. 복수명 표기 하지 말아주세요.
    8. 줄임말은 사용하지 말아주세요.
    9. 한 개념에 한 단어를 사용해주세요.
    10. 이름은 영어로 작성해주세요.

    기능은 ${desc} 입니다
    5개의 이름을 추천해주세요.
    이름 마다 \n 로 구분해주세요.
    이름 앞에 숫자를 붙이지 말아주세요.
    ex) count\n length\n ... 
    그 외의 답변은 써주지 마세요.
    `;
};