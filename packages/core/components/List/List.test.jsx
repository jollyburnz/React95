import React from 'react';
import { render } from '../shared/test/utils';
import List from './List';

describe('<List />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <List>
          <List.Item icon="folder_exe2">
            <List>
              <List.Item icon="microsoft_exchange">
                Microsoft Exchange
              </List.Item>
              <List.Divider />
              <List.Item icon="windows_explorer">Windows Explorer</List.Item>
            </List>
            Programs
          </List.Item>
        </List>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
