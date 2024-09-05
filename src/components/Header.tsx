import AppsIcon from "@mui/icons-material/Apps";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function Header({
  firstCharacter,
  setFirstCharacter,
  secondCharacter,
  setSecondCharacter,
}: any) {
  const firstCharacters = ["❎", "🟦", "🟥", "🍀", "❌", "🤖"];
  const secondCharacters = ["🔴", "🔵", "🟢", "🍁", "🌀", "👽️"];

  function handleFirstCharacterChange(event: SelectChangeEvent) {
    setFirstCharacter(event.target.value as string);
  }

  function handleSecondCharacterChange(event: SelectChangeEvent) {
    setSecondCharacter(event.target.value as string);
  }

  return (
    <header className="header">
      <Box
        sx={{
          minWidth: 120,
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <AppsIcon sx={{ width: 36, height: 36 }} />
        <h1>Tic-tac-toe</h1>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="first-character-select-label">
            First player:
          </InputLabel>
          <Select
            labelId="first-character-select-label"
            id="first-character-select"
            value={firstCharacter}
            label="First character"
            defaultValue={firstCharacters[0]}
            onChange={handleFirstCharacterChange}
          >
            {firstCharacters.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <InputLabel id="second-character-select-label">
            Second player:
          </InputLabel>
          <Select
            labelId="second-character-select-label"
            id="second-character-select"
            value={secondCharacter}
            label="Second character"
            defaultValue={secondCharacters[0]}
            onChange={handleSecondCharacterChange}
          >
            {secondCharacters.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </header>
  );
}
