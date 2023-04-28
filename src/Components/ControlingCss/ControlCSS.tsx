import { FC } from "react";
import Output from "./Output";
import { FormikProps, withFormik } from "formik";

type P = {} & FormikProps<S>

const ControlCSS: FC<P> = ({ values , handleChange  }) => {
 
    
  return (
    <div>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <p>Spacing</p>
          <input type="range" name="range"   value={values.range} onChange={handleChange}/>
        </div>
        <div className="flex gap-2">
          <p>Blur</p>
          <input type="range" value={values.blur} onChange={handleChange} name="blur"/>
        </div>
        <div className="flex gap-2">
          <p>Base Color</p>
          <input type="color" value={values.color} onChange={handleChange} name="color" />
        </div>
      </div>
      <Output padd={values.range} blurVal={values.blur} color={values.color}/>
    </div>
  );
};

const initialValues = {
    range:0,
    blur:0,
    color:'#000000'
}

type S = typeof initialValues;

function submit (){}

const formikHOC = withFormik({
    mapPropsToValues:()=>initialValues,
    handleSubmit:submit,
})

export default formikHOC(ControlCSS);
