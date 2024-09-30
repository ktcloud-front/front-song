import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types.ts' // 컴포넌트 불러오기

// Storybook 메타데이터 설정
const meta: {
  argTypes: {
    color: { control: string };
    variant: { control: { options: string[]; type: string } };
    align: { control: { options: string[]; type: string } }
  };
  component: React.FunctionComponent<TextProps>;
  title: string;
  tags: string[]
} = {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      },
    },
    color: {
      control: 'color',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'justify'],
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

// 기본 템플릿
export const Default: { args: { color: string; variant: string; text: string; align: string } } = {
  args: {
    variant: 'p',
    text: 'This is a default paragraph.',
    color: '#000',
    align: 'left',
  },
};