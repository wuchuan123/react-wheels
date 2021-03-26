const fs = require('fs');
const {resolve} = require('path');
const camelCase = require('camelcase');
const decamelize = require('decamelize');

const main = () => {
  const svgs = fs.readdirSync(resolve(__dirname, './Icon/svg/'));
  svgs.forEach(svgFile => {
    const name = 'Icon' + camelCase(svgFile.replace('.svg', ''), {pascalCase: true});
    console.log(name);
    // import ${name}Svg from './svg/${svgFile}' //暂时注释代码
    const componentContent =
  `import * as React from 'react'
import classnames from 'classnames'
import Icon, { IconComponentProps } from './index'
import { ReactComponent as ${name}Svg } from './svg/${svgFile}'

const ${name} = (props: IconComponentProps, ref: React.MutableRefObject<HTMLSpanElement>) => {
  const { className } = props
  return <Icon className={classnames('${decamelize(name, '-')}', className)} {...props} icon={${name}Svg} ref={ref} />
}

${name}.displayName = '${name}'
export default React.forwardRef(${name})
    `;
    fs.writeFileSync(resolve(__dirname, `./Icon/${name}.tsx`), componentContent, {encoding: 'utf8'});
  })
};
main();
