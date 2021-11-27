import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LeftButtons>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </LeftButtons>
        <Logo />
        <RightButtons>
          <button>Subscribe</button>
          <div>Already a subscriber?</div>
        </RightButtons>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    justify-content: space-between;
    display: flex;
    gap: 24px;
  }
`;

const LeftButtons = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 24px;
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const RightButtons = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    flex-direction: column;
    align-items: flex-center;
    justify-content: center;
  }

  > button {
    color: var(--color-white);
    background-color: var(--color-primary);
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    text-align: center;
    width: 15ch;
  }

  > div {
    font-size: 0.75rem;
    font-style: italic;
    text-align: center;
    text-decoration: underline;
  }
`;

export default Header;
