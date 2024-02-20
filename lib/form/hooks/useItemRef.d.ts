import * as React from 'react';
export default function useItemRef(): (name: any, children: any) => React.Ref<any> | undefined;
