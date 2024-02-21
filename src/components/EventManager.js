import { useState, useContext } from "react";

import { DataContext } from "../providers/DataProvider";

import { AuthContext } from "../providers/AuthProvider";

import {
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Button,
  InputRightAddon,
} from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Portal,
} from "@chakra-ui/react";

import { SearchIcon, TriangleDownIcon } from "@chakra-ui/icons";

const FilterMenu = () => {
  const { filterEvents, FILTERS } = useContext(DataContext);

  const { isSignedIn } = useContext(AuthContext);

  const [filter, setFilter] = useState(FILTERS);

  const handleFilter = ({ type, value }) => {
    const newFilter = { ...filter };
    newFilter[type] = value;

    console.log(newFilter);
    setFilter(newFilter);
    filterEvents(newFilter);
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<TriangleDownIcon />}>
        Filter
      </MenuButton>
      <Portal>
        <MenuList minWidth="200px" zIndex="popover">
          <Flex justify="space-between">
            <MenuOptionGroup defaultValue="desc" title="Date" type="radio">
              <MenuItemOption
                onClick={() => {
                  handleFilter({ type: "sort", value: "asc" });
                }}
                value="asc"
              >
                Ascending
              </MenuItemOption>
              <MenuItemOption
                onClick={() => {
                  handleFilter({ type: "sort", value: "desc" });
                }}
                value="desc"
              >
                Descending
              </MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            {isSignedIn() && (
              <MenuOptionGroup
                defaultValue="all"
                title="Permissions"
                type="radio"
              >
                <MenuItemOption
                  value="all"
                  onClick={() =>
                    handleFilter({ type: "permission", value: "all" })
                  }
                >
                  All
                </MenuItemOption>
                <MenuItemOption
                  value="public"
                  onClick={() =>
                    handleFilter({ type: "permission", value: "public" })
                  }
                >
                  Public
                </MenuItemOption>
                <MenuItemOption
                  value="private"
                  onClick={() =>
                    handleFilter({ type: "permission", value: "private" })
                  }
                  checked={true}
                >
                  Private
                </MenuItemOption>
              </MenuOptionGroup>
            )}
            <MenuDivider />
            <MenuOptionGroup title="Event Type" type="radio">
              <MenuItemOption
                onClick={() =>
                  handleFilter({ type: "eventType", value: "all" })
                }
                value="all"
              >
                All
              </MenuItemOption>
              <MenuItemOption
                onClick={() =>
                  handleFilter({ type: "eventType", value: "activity" })
                }
                value="activity"
              >
                Activity
              </MenuItemOption>
              <MenuItemOption
                onClick={() =>
                  handleFilter({ type: "eventType", value: "tech_talk" })
                }
                value="tech_talk"
              >
                Tech Talk
              </MenuItemOption>
              <MenuItemOption
                onClick={() =>
                  handleFilter({ type: "eventType", value: "workshop" })
                }
                value="workshop"
              >
                Workshop
              </MenuItemOption>
            </MenuOptionGroup>
          </Flex>
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default function EventManager() {
  const [searchVal, setSearchVal] = useState("");

  const { searchEvents } = useContext(DataContext);

  return (
    <Flex marginBottom="20px">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="grey.300" />}
        />
        <Input
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
            searchEvents(e.target.value);
          }}
          placeholder="Search Events..."
          bg="white"
          variant="outline"
        />
        <InputRightAddon padding="0" children={<FilterMenu />} />
      </InputGroup>
    </Flex>
  );
}
