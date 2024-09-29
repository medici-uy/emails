import {
  Heading as BaseHeading,
  HeadingProps as BaseHeadingProps,
} from '@react-email/components';
import React from 'react';

export type HeadingProps = BaseHeadingProps;

export function Heading(props: HeadingProps) {
  return (
    <BaseHeading {...props} className="text-xl mt-0 mb-4">
      {props.children}
    </BaseHeading>
  );
}
