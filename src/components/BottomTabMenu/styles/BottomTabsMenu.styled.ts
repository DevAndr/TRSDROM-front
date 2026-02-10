import styled from "styled-components";
import {Tabs} from "@/components/ui/tabs.tsx";

export const BottomTabsMenuStyled = styled(Tabs)`
  position: fixed;
  bottom: 0;
`;

export const BottomTabsMenuTabStyled = styled.div`
  height: 100%;
`;

export const BottomTabsMenuTitleTabStyled = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 0;
  height: 52px;

  .title {
    transition: font-size 0.2s ease-in;

    font-size: ${({ selected }) => (selected ? "0.8rem" : "0.65rem")};
  }

  .icon {
    transition:
      width 0.2s ease-in,
      height 0.2s ease-in,
      stroke-width 0.5s ease-in;
     stroke-width: ${({ selected }) => (selected ? 2.5 : 2)};
    height: ${({ selected }) => (selected ? "1.25rem" : "1rem")};
    width: ${({ selected }) => (selected ? "1.25rem" : "1rem")};
  }
`;
